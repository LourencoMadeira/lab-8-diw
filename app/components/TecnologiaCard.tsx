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
import ContadorPersonalizado from "@/app/components/ContadorPersonalizado";

export interface TecnologiaProps {
  title: string;
  image: string;

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta interface
  // CÓDIGO:
  //   description?: string;
  // RESULTADO:
  //   permite mostrar texto adicional da tecnologia
  // (não aplicado, apenas comentado)
}

export default function TecnologiaCard({ title, image }: TecnologiaProps) {

  return (
    <div
      className="bg-white/10 w-44 h-52 rounded-xl p-4 shadow flex flex-col items-center justify-between"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="bg-white/10 w-48 h-56 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-between"
      // RESULTADO:
      //   altera tamanho e estilo do card
      // (não aplicado, apenas comentado)
    >
      
      <Image
        src={`/tecnologias/${image}`}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste src
        // CÓDIGO:
        //   src={image}
        // RESULTADO:
        //   permite passar caminho completo da imagem
        // (não aplicado, apenas comentado)

        alt={title}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste alt
        // CÓDIGO:
        //   alt={`Logo da tecnologia ${title}`}
        // RESULTADO:
        //   texto alternativo mais descritivo
        // (não aplicado, apenas comentado)

        width={70}
        height={70}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: nestes valores
        // CÓDIGO:
        //   width={90}
        //   height={90}
        // RESULTADO:
        //   aumenta o tamanho da imagem
        // (não aplicado, apenas comentado)
      />

      <h3 className="font-medium text-center">
        {title}
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h3
            CÓDIGO:
              ({title.length})
            RESULTADO:
              mostra o tamanho do texto do título
            (não aplicado, apenas comentado) */}
      </h3>

      {}
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: este bloco vazio {}
          CÓDIGO:
            remover {}
          RESULTADO:
            elimina JSX inútil
          (não aplicado, apenas comentado) */}

      <ContadorPersonalizado
        title={title}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste componente
        // CÓDIGO:
        //   title={`${title}_tech`}
        // RESULTADO:
        //   altera a chave usada no localStorage
        // (não aplicado, apenas comentado)
      />
    </div>
  );
}
