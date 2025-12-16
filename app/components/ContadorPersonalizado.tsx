"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   o componente passa a Server Component
//   (atenção: useState, useEffect e localStorage deixam de funcionar)
// (não aplicado, apenas comentado)

import { useState, useEffect } from "react";

export default function ContadorPersonalizado({ title }: { title: string }) {

  const key = `likes_${title.replace(/\s+/g, "_")}`;
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta linha
  // CÓDIGO:
  //   const key = `likes_${title.toLowerCase().replace(/\s+/g, "_")}`;
  // RESULTADO:
  //   evita chaves diferentes no localStorage por causa de maiúsculas/minúsculas
  // (não aplicado, apenas comentado)

  const [likes, setLikes] = useState(0);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: valor inicial
  // CÓDIGO:
  //   useState(1);
  // RESULTADO:
  //   começa já com 1 like
  // (não aplicado, apenas comentado)

  useEffect(() => {
    const salvo = localStorage.getItem(key);
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: após o getItem
    // CÓDIGO:
    //   if (salvo === null) return;
    // RESULTADO:
    //   evita conversão desnecessária
    // (não aplicado, apenas comentado)

    if (salvo) setLikes(Number(salvo));
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: nesta linha
    // CÓDIGO:
    //   setLikes(parseInt(salvo, 10));
    // RESULTADO:
    //   conversão explícita para inteiro
    // (não aplicado, apenas comentado)
  }, []);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: array de dependências
  // CÓDIGO:
  //   [key]
  // RESULTADO:
  //   recarrega likes se o título mudar
  // (não aplicado, apenas comentado)

  function adicionarLike() {
    const novo = likes + 1;
    setLikes(novo);

    // ALTERAÇÃO POSSÍVEL:
    // ONDE: nesta linha
    // CÓDIGO:
    //   if (novo > 100) return;
    // RESULTADO:
    //   limita o número máximo de likes
    // (não aplicado, apenas comentado)

    localStorage.setItem(key, String(novo));
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: nesta linha
    // CÓDIGO:
    //   localStorage.removeItem(key);
    // RESULTADO:
    //   permite apagar os likes guardados
    // (não aplicado, apenas comentado)
  }

  return (
    <button
      onClick={adicionarLike}
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: neste onClick
      // CÓDIGO:
      //   onClick={() => setLikes(0)}
      // RESULTADO:
      //   botão passa a resetar os likes
      // (não aplicado, apenas comentado)
      className="bg-pink-300 px-3 py-1 rounded hover:bg-pink-400"
    >
      ❤️ {likes}
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: dentro do botão
          CÓDIGO:
            Likes
          RESULTADO:
            adiciona texto ao lado do contador
          (não aplicado, apenas comentado) */}
    </button>
  );
}
