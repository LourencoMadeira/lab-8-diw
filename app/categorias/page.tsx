"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   a página passa a Server Component
//   (atenção: useEffect e useState deixam de funcionar)
// (não aplicado, apenas comentado)

import { useEffect, useState } from "react";
import Link from "next/link";

const API = "https://deisishop.pythonanywhere.com";
// ALTERAÇÃO POSSÍVEL:
// ONDE: nesta constante
// CÓDIGO:
//   const API = process.env.NEXT_PUBLIC_API_URL;
// RESULTADO:
//   a URL da API passa a vir de variáveis de ambiente
// (não aplicado, apenas comentado)

export default function CategoriasPage() {

  const [categorias, setCategorias] = useState([]);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: neste useState
  // CÓDIGO:
  //   const [categorias, setCategorias] = useState<string[]>([]);
  // RESULTADO:
  //   tipagem explícita das categorias
  // (não aplicado, apenas comentado)

  useEffect(() => {
    fetch(`${API}/categories/`)
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: após o fetch
      // CÓDIGO:
      //   .then((res) => {
      //     if (!res.ok) throw new Error("Erro ao buscar categorias");
      //     return res.json();
      //   })
      // RESULTADO:
      //   tratamento de erro HTTP
      // (não aplicado, apenas comentado)

      .then((res) => res.json())
      .then((data) => setCategorias(data));
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: neste then
      // CÓDIGO:
      //   .then((data) => setCategorias(data.sort()))
      // RESULTADO:
      //   categorias passam a aparecer ordenadas
      // (não aplicado, apenas comentado)

  }, []);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: neste array de dependências
  // CÓDIGO:
  //   [API]
  // RESULTADO:
  //   o efeito volta a correr se a API mudar
  // (não aplicado, apenas comentado)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Categorias
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h1
            CÓDIGO:
              ({categorias.length})
            RESULTADO:
              mostra o número total de categorias
            (não aplicado, apenas comentado) */}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categorias.map((cat: string) => (
          <Link
            key={cat}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste key
            // CÓDIGO:
            //   key={`${cat}-categoria`}
            // RESULTADO:
            //   garante unicidade mesmo com nomes repetidos
            // (não aplicado, apenas comentado)

            href={`/categorias/${cat}`}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste href
            // CÓDIGO:
            //   href={`/categorias/${encodeURIComponent(cat)}`}
            // RESULTADO:
            //   evita erros se a categoria tiver espaços ou caracteres especiais
            // (não aplicado, apenas comentado)

            className="bg-white/10 p-4 rounded-xl shadow hover:bg-white/20 text-center"
          >
            {cat}
            {/* ALTERAÇÃO POSSÍVEL:
                ONDE: dentro do Link
                CÓDIGO:
                  <span className="block text-sm text-gray-400">ver produtos</span>
                RESULTADO:
                  adiciona texto auxiliar ao botão
                (não aplicado, apenas comentado) */}
          </Link>
        ))}
      </div>
    </div>
  );
}
