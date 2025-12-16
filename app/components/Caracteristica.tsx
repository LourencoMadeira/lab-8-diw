"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   o componente passa a Server Component
//   (atenção: só possível se for usado apenas em Server Components)
// (não aplicado, apenas comentado)

import Link from "next/link";

export interface CaracteristicaProps {
  texto: string;
  index: number;

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta interface
  // CÓDIGO:
  //   isActive?: boolean;
  // RESULTADO:
  //   permite alterar o estilo do componente conforme o estado
  // (não aplicado, apenas comentado)
}

export default function Caracteristica({ texto, index }: CaracteristicaProps) {

  return (
    <Link
      href={`/caracteristica/${index}`}
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: neste href
      // CÓDIGO:
      //   href={`/caracteristicas/${index}`}
      // RESULTADO:
      //   corrige a rota caso a pasta seja /caracteristicas e não /caracteristica
      // (não aplicado, apenas comentado)

      className="bg-white/10 block p-4 rounded-xl shadow hover:bg-white/20 transition"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className={`bg-white/10 block p-4 rounded-xl shadow ${index === 0 ? "ring-2 ring-blue-500" : ""}`}
      // RESULTADO:
      //   permite destacar a primeira característica
      // (não aplicado, apenas comentado)
    >
      <p className="font-semibold text-center">
        {texto}

        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do <p>
            CÓDIGO:
              #{index}
            RESULTADO:
              mostra o índice da característica no card
            (não aplicado, apenas comentado) */}
      </p>
    </Link>
  );
}
