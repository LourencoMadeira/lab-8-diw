"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";
import { Product } from "@/app/models/interfaces";
import { Spinner } from "@/components/ui/spinner";
import { ProductCard } from "@/app/components/ProductCard";

const API = "https://deisishop.pythonanywhere.com/products";

// Fetcher para SWR
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json();
};

export default function ProdutosPage() {
  const { data, error, isLoading } = useSWR<Product[]>(API, fetcher);

  // ---------------------------
  // ESTADOS
  // ---------------------------
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  const [student, setStudent] = useState(false);
  const [coupon, setCoupon] = useState("");

  const [purchaseMessage, setPurchaseMessage] = useState("");

  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Guardar carrinho
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adicionar ao carrinho
  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  // Remover
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // Filtrar + ordenar produtos
  useEffect(() => {
    if (!data) return;

    const lower = search.toLowerCase();
    let filtered = data.filter((p) =>
      p.title.toLowerCase().includes(lower)
    );

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
    }

    setFilteredData(filtered);
  }, [search, sortOption, data]);

  // Total
  const total = cart.reduce((sum, p) => {
    const price = Number(p.price);
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  // ---------------------------
  // FUNÇÃO BUY — versão professor + mensagem final
  // ---------------------------
  const buy = () => {
    fetch("https://deisishop.pythonanywhere.com/buy", {
      method: "POST",
      body: JSON.stringify({
        products: cart.map((p) => p.id),
        name: "",
        student: student,
        coupon: coupon,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        setCart([]);
        localStorage.setItem("cart", "[]");
        setPurchaseMessage("Compra realizada!");
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

      <h1 className="text-3xl font-bold">Produtos</h1>

      {/* Pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar produto..."
        className="border p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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

        {/* Checkbox Estudante */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={student}
            onChange={(e) => setStudent(e.target.checked)}
          />
          Estudante DEISI
        </label>

        {/* Cupão */}
        <input
          type="text"
          placeholder="Cupão de desconto"
          className="border p-2 rounded w-full"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />

        {/* Total */}
        <p className="font-bold text-xl mt-2">
          Total: {Number(total).toFixed(2)} €
        </p>

        {/* BOTÃO COMPRAR */}
        <button
          onClick={buy}
          className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          disabled={cart.length === 0}
        >
          Comprar
        </button>

        {/* MENSAGEM FINAL */}
        {purchaseMessage && (
          <p className="text-center text-green-700 font-bold mt-3">
            {purchaseMessage}
          </p>
        )}
      </div>
    </div>
  );
}
