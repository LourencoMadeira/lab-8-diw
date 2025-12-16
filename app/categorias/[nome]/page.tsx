"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   a página passa a Server Component
//   (atenção: useParams, useState e useEffect deixam de funcionar)
// (não aplicado, apenas comentado)

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const API = "https://deisishop.pythonanywhere.com";
// ALTERAÇÃO POSSÍVEL:
// ONDE: nesta constante
// CÓDIGO:
//   const API = process.env.NEXT_PUBLIC_API_URL;
// RESULTADO:
//   a URL da API passa a ser configurável por variáveis de ambiente
// (não aplicado, apenas comentado)

export default function CategoriaPage() {

  const { nome } = useParams();
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta linha
  // CÓDIGO:
  //   const { nome } = useParams<{ nome: string }>();
  // RESULTADO:
  //   tipagem explícita do parâmetro dinâmico
  // (não aplicado, apenas comentado)

  const [produtos, setProdutos] = useState([]);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: neste useState
  // CÓDIGO:
  //   const [produtos, setProdutos] = useState<any[]>([]);
  // RESULTADO:
  //   deixa explícito que o estado guarda um array
  // (não aplicado, apenas comentado)

  useEffect(() => {
    fetch(`${API}/products/`)
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: após o fetch
      // CÓDIGO:
      //   .then((res) => {
      //     if (!res.ok) throw new Error("Erro ao carregar produtos");
      //     return res.json();
      //   })
      // RESULTADO:
      //   tratamento de erro HTTP
      // (não aplicado, apenas comentado)

      .then((res) => res.json())
      .then((data) =>
        setProdutos(
          data.filter((p: any) => p.category === nome)
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: dentro do filter
          // CÓDIGO:
          //   p.category === decodeURIComponent(nome as string)
          // RESULTADO:
          //   evita problemas com categorias com espaços/caracteres especiais
          // (não aplicado, apenas comentado)
        )
      );

  }, [nome]);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: neste array de dependências
  // CÓDIGO:
  //   [nome, API]
  // RESULTADO:
  //   o efeito volta a correr se a API mudar
  // (não aplicado, apenas comentado)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Categoria: {nome}
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h1
            CÓDIGO:
              ({produtos.length})
            RESULTADO:
              mostra quantos produtos existem nesta categoria
            (não aplicado, apenas comentado) */}
      </h1>

      <Link
        href="/categorias"
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste href
        // CÓDIGO:
        //   href="/"
        // RESULTADO:
        //   botão passa a voltar para a página inicial
        // (não aplicado, apenas comentado)
        className="underline text-blue-400 block mb-6 text-center"
      >
        Voltar
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {produtos.map((p: any) => (
          <Link
            href={`/produtos/${p.id}`}
            key={p.id}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste href
            // CÓDIGO:
            //   href={`/produtos/${p.id}?from=${nome}`}
            // RESULTADO:
            //   permite saber de que categoria o utilizador veio
            // (não aplicado, apenas comentado)
            className="bg-white/10 p-4 rounded-xl shadow hover:bg-white/20"
          >
            <img
              src={p.image}
              // ALTERAÇÃO POSSÍVEL:
              // ONDE: nesta tag img
              // CÓDIGO:
              //   alt={p.title}
              // RESULTADO:
              //   adiciona texto alternativo à imagem
              // (não aplicado, apenas comentado)
              className="w-24 h-24 mx-auto object-contain"
            />

            <h2 className="font-semibold text-center mt-2">
              {p.title}
              {/* ALTERAÇÃO POSSÍVEL:
                  ONDE: dentro do h2
                  CÓDIGO:
                    ({p.category})
                  RESULTADO:
                    mostra também a categoria do produto
                  (não aplicado, apenas comentado) */}
            </h2>

            <p className="text-green-300 text-center">
              {p.price} €
              {/* ALTERAÇÃO POSSÍVEL:
                  ONDE: nesta linha
                  CÓDIGO:
                    {p.price.toFixed(2)} €
                  RESULTADO:
                    força sempre duas casas decimais no preço
                  (não aplicado, apenas comentado) */}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
