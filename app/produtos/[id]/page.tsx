"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   a página passa a Server Component
//   (useParams, useState e useEffect deixam de funcionar)
//   teria de receber { params } como argumento
// (não aplicado, apenas comentado)

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProdutoDetalhe } from "@/app/components/ProdutoDetalhe";
import { Product } from "@/app/models/interfaces";

export default function ProdutoPage() {

  const { id } = useParams();
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta linha
  // CÓDIGO:
  //   const { id } = useParams<{ id: string }>();
  // RESULTADO:
  //   tipagem explícita do parâmetro dinâmico
  // (não aplicado, apenas comentado)

  const [product, setProduct] = useState<Product | null>(null);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: tipo do estado
  // CÓDIGO:
  //   useState<Product>();
  // RESULTADO:
  //   remove null, mas exige validações diferentes
  // (não aplicado, apenas comentado)

  const [loading, setLoading] = useState(true);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: valor inicial
  // CÓDIGO:
  //   useState(false);
  // RESULTADO:
  //   desativa loading inicial
  // (não aplicado, apenas comentado)

  useEffect(() => {
    async function fetchProduct() {

      // ALTERAÇÃO POSSÍVEL:
      // ONDE: início da função
      // CÓDIGO:
      //   if (!id) return;
      // RESULTADO:
      //   evita fetch com id undefined
      // (não aplicado, apenas comentado)

      try {
        const res = await fetch(
          `https://deisishop.pythonanywhere.com/products/${id}`
        );

        // ALTERAÇÃO POSSÍVEL:
        // ONDE: após o fetch
        // CÓDIGO:
        //   if (!res.ok) throw new Error("Produto não encontrado");
        // RESULTADO:
        //   trata erros HTTP (404, 500)
        // (não aplicado, apenas comentado)

        const data = await res.json();
        setProduct(data);

        // ALTERAÇÃO POSSÍVEL:
        // ONDE: após setProduct
        // CÓDIGO:
        //   console.log(data);
        // RESULTADO:
        //   ajuda a depurar resposta da API
        // (não aplicado, apenas comentado)

      } catch (err) {
        console.error(err);

        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste catch
        // CÓDIGO:
        //   setProduct(null);
        // RESULTADO:
        //   força estado de erro
        // (não aplicado, apenas comentado)
      } finally {
        setLoading(false);

        // ALTERAÇÃO POSSÍVEL:
        // ONDE: aqui
        // CÓDIGO:
        //   setTimeout(() => setLoading(false), 500);
        // RESULTADO:
        //   simula loading mínimo para UX
        // (não aplicado, apenas comentado)
      }
    }

    fetchProduct();

  }, [id]);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: array de dependências
  // CÓDIGO:
  //   []
  // RESULTADO:
  //   fetch acontece apenas uma vez
  //   (atenção: deixa de reagir à mudança de id)
  // (não aplicado, apenas comentado)

  // ---------------------------
  // ESTADOS DE RENDER
  // ---------------------------
  if (loading)
    return (
      <p>
        A carregar…
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: aqui
            CÓDIGO:
              <Spinner />
            RESULTADO:
              mostra spinner em vez de texto
            (não aplicado, apenas comentado) */}
      </p>
    );

  if (!product)
    return (
      <p>
        Produto não encontrado.
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: aqui
            CÓDIGO:
              <Link href="/produtos">Voltar</Link>
            RESULTADO:
              permite voltar à lista de produtos
            (não aplicado, apenas comentado) */}
      </p>
    );

  // ---------------------------
  // RENDER FINAL
  // ---------------------------
  return (
    <div
      className="p-6"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="p-10 max-w-4xl mx-auto"
      // RESULTADO:
      //   centra o detalhe do produto
      // (não aplicado, apenas comentado)
    >
      <ProdutoDetalhe
        product={product}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste componente
        // CÓDIGO:
        //   showBackButton={false}
        // RESULTADO:
        //   controla visibilidade do botão "Voltar"
        //   (caso a prop exista)
        // (não aplicado, apenas comentado)
      />
    </div>
  );
}
