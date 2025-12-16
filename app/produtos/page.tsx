"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   a página passa a Server Component
//   (useSWR, useState, useEffect e localStorage deixam de funcionar)
// (não aplicado, apenas comentado)

import useSWR from "swr";
import { useState, useEffect } from "react";
import { Product } from "@/app/models/interfaces";
import { Spinner } from "@/components/ui/spinner";
import { ProductCard } from "@/app/components/ProductCard";

const API = "https://deisishop.pythonanywhere.com/products";
// ALTERAÇÃO POSSÍVEL:
// ONDE: nesta constante
// CÓDIGO:
//   const API = process.env.NEXT_PUBLIC_API_URL + "/products";
// RESULTADO:
//   permite mudar a API sem mexer no código
// (não aplicado, apenas comentado)

// Fetcher para SWR
const fetcher = async (url: string) => {
  const res = await fetch(url);

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: antes da validação
  // CÓDIGO:
  //   console.log("Fetching:", url);
  // RESULTADO:
  //   ajuda na depuração de chamadas à API
  // (não aplicado, apenas comentado)

  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json();
};

export default function ProdutosPage() {

  const { data, error, isLoading } = useSWR<Product[]>(API, fetcher);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: neste hook
  // CÓDIGO:
  //   useSWR<Product[]>(API, fetcher, { refreshInterval: 5000 })
  // RESULTADO:
  //   recarrega produtos automaticamente a cada 5s
  // (não aplicado, apenas comentado)

  // ---------------------------
  // ESTADOS
  // ---------------------------
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  const [student, setStudent] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [purchaseMessage, setPurchaseMessage] = useState("");

  // ALTERAÇÃO POSSÍVEL (ADIÇÃO):
  // ONDE: aqui nos estados
  // CÓDIGO:
  //   const [minPrice, setMinPrice] = useState("");
  //   const [maxPrice, setMaxPrice] = useState("");
  // RESULTADO:
  //   permite filtrar produtos por preço mínimo e máximo
  // (não aplicado, apenas comentado)

  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta inicialização
  // CÓDIGO:
  //   return [];
  // RESULTADO:
  //   desativa persistência do carrinho
  // (não aplicado, apenas comentado)

  // ---------------------------
  // GUARDAR CARRINHO
  // ---------------------------
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    // ALTERAÇÃO POSSÍVEL:
    // ONDE: aqui
    // CÓDIGO:
    //   if (cart.length === 0) localStorage.removeItem("cart");
    // RESULTADO:
    //   limpa o localStorage quando o carrinho está vazio
    // (não aplicado, apenas comentado)
  }, [cart]);

  // ---------------------------
  // CARRINHO
  // ---------------------------
  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);

    // ALTERAÇÃO POSSÍVEL:
    // ONDE: nesta função
    // CÓDIGO:
    //   if (prev.find(p => p.id === product.id)) return prev;
    // RESULTADO:
    //   impede produtos duplicados no carrinho
    // (não aplicado, apenas comentado)
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // ---------------------------
  // FILTRAR + ORDENAR
  // ---------------------------
  useEffect(() => {
    if (!data) return;

    const lower = search.toLowerCase();
    let filtered = data.filter((p) =>
      p.title.toLowerCase().includes(lower)
    );

    // ALTERAÇÃO POSSÍVEL (ADIÇÃO):
    // ONDE: após filtro por nome
    // CÓDIGO:
    //   if (minPrice) {
    //     filtered = filtered.filter(p => Number(p.price) >= Number(minPrice));
    //   }
    //   if (maxPrice) {
    //     filtered = filtered.filter(p => Number(p.price) <= Number(maxPrice));
    //   }
    // RESULTADO:
    //   filtra produtos por intervalo de preços
    // (não aplicado, apenas comentado)

    switch (sortOption) {
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-asc":
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "price-desc":
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
        break;

      // ALTERAÇÃO POSSÍVEL (ADIÇÃO):
      // case "rating":
      //   filtered.sort((a, b) => b.rating.rate - a.rating.rate);
      // RESULTADO:
      //   ordena produtos por rating
    }

    setFilteredData(filtered);
  }, [
    search,
    sortOption,
    data,
    // ALTERAÇÃO POSSÍVEL:
    // minPrice,
    // maxPrice
  ]);

  // ---------------------------
  // TOTAL
  // ---------------------------
  const total = cart.reduce((sum, p) => {
    const price = Number(p.price);
    return sum + (isNaN(price) ? 0 : price);
  }, 0);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: neste cálculo
  // CÓDIGO:
  //   sum + p.price * 1.23
  // RESULTADO:
  //   adiciona IVA ao total
  // (não aplicado, apenas comentado)

  // ---------------------------
  // BUY
  // ---------------------------
  const buy = () => {
    fetch("https://deisishop.pythonanywhere.com/buy", {
      method: "POST",
      body: JSON.stringify({
        products: cart.map((p) => p.id),
        name: "",
        student,
        coupon,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then(() => {
        setCart([]);
        localStorage.setItem("cart", "[]");
        setPurchaseMessage("Compra realizada!");

        // ALTERAÇÃO POSSÍVEL:
        // ONDE: aqui
        // CÓDIGO:
        //   setCoupon("");
        // RESULTADO:
        //   limpa o cupão após compra
      })
      .catch(() => {
        setPurchaseMessage("Erro ao realizar compra.");
      });
  };

  // ---------------------------
  // LOADING / ERRO
  // ---------------------------
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner className="h-8 w-8" />
      </div>
    );

  if (error) return <p>Erro ao carregar produtos.</p>;

  // ---------------------------
  // RENDER
  // ---------------------------
  return (
    <div className="space-y-6 p-6">

      <h1 className="text-3xl font-bold">
        Produtos
        {/* ALTERAÇÃO POSSÍVEL:
            ({filteredData.length})
            mostra quantos produtos estão visíveis */}
      </h1>

      {/* Pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar produto..."
        className="border p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ALTERAÇÃO POSSÍVEL (ADIÇÃO):
          <div className="flex gap-4">
            <input type="number" placeholder="Preço mínimo" />
            <input type="number" placeholder="Preço máximo" />
          </div>
          RESULTADO:
            filtros por intervalo de preços */}

      {/* Ordenação */}
      <select
        className="border p-2 rounded"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="name-asc">Nome (A → Z)</option>
        <option value="name-desc">Nome (Z → A)</option>
        <option value="price-asc">Preço (Barato → Caro)</option>
        <option value="price-desc">Preço (Caro → Barato)</option>
      </select>

      {/* ALTERAÇÃO POSSÍVEL (ADIÇÃO):
          Botão "Limpar filtros" que faz reset aos estados */}

      {/* LISTA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredData.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            addToCart={() => addToCart(prod)}
          />
        ))}
      </div>

      {/* CARRINHO */}
      <div className="p-4 border rounded space-y-4 mt-10">
        <h2 className="text-2xl font-bold">Carrinho</h2>

        {cart.length === 0 && <p>O carrinho está vazio.</p>}

        {cart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{item.title}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Remover
            </button>
          </div>
        ))}

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={student}
            onChange={(e) => setStudent(e.target.checked)}
          />
          Estudante DEISI
        </label>

        <input
          type="text"
          placeholder="Cupão de desconto"
          className="border p-2 rounded w-full"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />

        <p className="font-bold text-xl mt-2">
          Total: {Number(total).toFixed(2)} €
        </p>

        <button
          onClick={buy}
          className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          disabled={cart.length === 0}
        >
          Comprar
        </button>

        {purchaseMessage && (
          <p className="text-center text-green-700 font-bold mt-3">
            {purchaseMessage}
          </p>
        )}
      </div>
    </div>
  );
}
