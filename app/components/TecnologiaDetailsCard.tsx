"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   o componente passa a Server Component
//   (atenção: ContadorPersonalizado usa estado e localStorage)
// (não aplicado, apenas comentado)

import Image from "next/image";
import Link from "next/link";
import ContadorPersonalizado from "@/app/components/ContadorPersonalizado";

interface TecnologiaDetailsProps {
  title: string;
  image: string;
  description: string;
  rating: number;

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta interface
  // CÓDIGO:
  //   showLikes?: boolean;
  // RESULTADO:
  //   permite controlar se o contador de likes é mostrado
  // (não aplicado, apenas comentado)
}

export default function TecnologiaDetailsCard({
  title,
  image,
  description,
  rating
}: TecnologiaDetailsProps) {

  return (
    <div
      className="bg-white/10 p-6 rounded-xl shadow max-w-md mx-auto"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="bg-white/10 p-8 rounded-2xl shadow-lg max-w-lg mx-auto"
      // RESULTADO:
      //   altera o tamanho e o espaçamento do card
      // (não aplicado, apenas comentado)
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src={`/tecnologias/${image}`}
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: neste src
          // CÓDIGO:
          //   src={image}
          // RESULTADO:
          //   permite passar URL completa da imagem
          // (não aplicado, apenas comentado)

          alt={title}
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: neste alt
          // CÓDIGO:
          //   alt={`Imagem da tecnologia ${title}`}
          // RESULTADO:
          //   texto alternativo mais descritivo
          // (não aplicado, apenas comentado)

          width={140}
          height={140}
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: nestes valores
          // CÓDIGO:
          //   width={180}
          //   height={180}
          // RESULTADO:
          //   aumenta o tamanho da imagem
          // (não aplicado, apenas comentado)
        />

        <h2 className="text-2xl font-semibold">
          {title}
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: dentro do h2
              CÓDIGO:
                ({rating}/5)
              RESULTADO:
                mostra o rating junto ao título
              (não aplicado, apenas comentado) */}
        </h2>

        <p className="text-sm">
          {description}
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: aqui
              CÓDIGO:
                {description.substring(0, 120)}...
              RESULTADO:
                mostra descrição resumida
              (não aplicado, apenas comentado) */}
        </p>

        <p className="text-yellow-400 text-lg">
          ⭐ {rating}/5
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: nesta linha
              CÓDIGO:
                ⭐ {rating.toFixed(1)}/5
              RESULTADO:
                mostra uma casa decimal no rating
              (não aplicado, apenas comentado) */}
        </p>

        {/* Contador de likes para a tecnologia */}
        <ContadorPersonalizado
          title={title}
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: neste componente
          // CÓDIGO:
          //   title={`${title}_details`}
          // RESULTADO:
          //   separa os likes do card simples e do detalhe
          // (não aplicado, apenas comentado)
        />

        <Link
          href="/tecnologias"
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: neste href
          // CÓDIGO:
          //   href="/"
          // RESULTADO:
          //   botão passa a voltar para a página inicial
          // (não aplicado, apenas comentado)
          className="mt-4 bg-blue-500 px-4 py-2 rounded text-white shadow"
        >
          Voltar
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: dentro do Link
              CÓDIGO:
                ←
              RESULTADO:
                adiciona ícone visual ao botão
              (não aplicado, apenas comentado) */}
        </Link>
      </div>
    </div>
  );
}
