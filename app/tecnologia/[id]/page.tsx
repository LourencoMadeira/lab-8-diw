"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   a página passa a Server Component
//   (useParams deixa de funcionar)
//   teria de receber { params } como argumento
// (não aplicado, apenas comentado)

import { useParams } from "next/navigation";
import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaDetailsCard from "@/app/components/TecnologiaDetailsCard";

export default function TecnologiaPage() {

  const { id } = useParams();
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta linha
  // CÓDIGO:
  //   const { id } = useParams<{ id: string }>();
  // RESULTADO:
  //   tipagem explícita do parâmetro dinâmico
  // (não aplicado, apenas comentado)

  const index = Number(id);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta conversão
  // CÓDIGO:
  //   const index = parseInt(id as string, 10);
  // RESULTADO:
  //   conversão explícita para inteiro
  // (não aplicado, apenas comentado)

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: após a conversão
  // CÓDIGO:
  //   if (isNaN(index)) return <p>ID inválido</p>;
  // RESULTADO:
  //   impede acesso ao array com índice inválido
  // (não aplicado, apenas comentado)

  const tec = tecnologias[index];
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta linha
  // CÓDIGO:
  //   const tec = tecnologias.find((t) => t.id === index);
  // RESULTADO:
  //   deixa de depender da posição no array
  // (não aplicado, apenas comentado)

  if (!tec)
    return (
      <p>
        Tecnologia não encontrada.
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: aqui
            CÓDIGO:
              <Link href="/tecnologias">Voltar</Link>
            RESULTADO:
              permite regressar à lista de tecnologias
            (não aplicado, apenas comentado) */}
      </p>
    );

  return (
    <div
      className="p-6"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="p-10 max-w-4xl mx-auto"
      // RESULTADO:
      //   centra o detalhe da tecnologia na página
      // (não aplicado, apenas comentado)
    >
      <TecnologiaDetailsCard
        title={tec.title}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: nesta prop
        // CÓDIGO:
        //   title={`${tec.title} (Tech)`}
        // RESULTADO:
        //   altera dinamicamente o título mostrado
        // (não aplicado, apenas comentado)

        image={tec.image}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: nesta prop
        // CÓDIGO:
        //   image={`icons/${tec.image}`}
        // RESULTADO:
        //   altera o caminho das imagens
        // (não aplicado, apenas comentado)

        description={tec.description}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: nesta prop
        // CÓDIGO:
        //   description={tec.description.substring(0, 150)}
        // RESULTADO:
        //   mostra descrição resumida
        // (não aplicado, apenas comentado)

        rating={tec.rating}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: nesta prop
        // CÓDIGO:
        //   rating={Math.round(tec.rating)}
        // RESULTADO:
        //   arredonda o rating
        // (não aplicado, apenas comentado)
      />

      {/* ALTERAÇÃO POSSÍVEL (ADIÇÃO):
          ONDE: após o card
          CÓDIGO:
            <p className="text-center text-sm mt-4">
              Tecnologia #{index}
            </p>
          RESULTADO:
            mostra o índice da tecnologia atual
          (não aplicado, apenas comentado) */}
    </div>
  );
}
