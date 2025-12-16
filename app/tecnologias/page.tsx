"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   página passa a Server Component
//   (useParams não é usado aqui, mas TecnologiaCard usa Client logic)
// (não aplicado, apenas comentado)

import Image from "next/image";
import Link from "next/link";
import tecnologias from "@/app/data/tecnologias.json";

import TecnologiaCard from "@/app/components/TecnologiaCard";

export default function TecnologiasPage() {

  const lista = JSON.parse(JSON.stringify(tecnologias));
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta linha
  // CÓDIGO:
  //   const lista = tecnologias;
  // RESULTADO:
  //   remove cópia profunda desnecessária
  // (não aplicado, apenas comentado)
  //
  // ALTERAÇÃO POSSÍVEL (ADIÇÃO):
  // ONDE: aqui
  // CÓDIGO:
  //   const lista = tecnologias.filter(t => t.rating >= 4);
  // RESULTADO:
  //   filtra tecnologias por rating mínimo
  // (não aplicado, apenas comentado)

  return (
    <div className="p-6">
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: nesta div
          CÓDIGO:
            <div className="p-10 max-w-6xl mx-auto">
          RESULTADO:
            centra e limita a largura da página
          (não aplicado, apenas comentado) */}

      <h2 className="text-xl font-bold mb-4">
        Tecnologias Exploradas
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h2
            CÓDIGO:
              ({lista.length})
            RESULTADO:
              mostra quantas tecnologias existem
            (não aplicado, apenas comentado) */}
      </h2>

      {}
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: este bloco vazio {}
          CÓDIGO:
            remover {}
          RESULTADO:
            JSX inútil, não faz nada
          (não aplicado, apenas comentado) */}

      <div className="flex gap-4 flex-wrap mb-10">
        {lista.map((tec: any, i: number) => (
          <TecnologiaCard
            key={i}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste key
            // CÓDIGO:
            //   key={tec.title}
            // RESULTADO:
            //   evita usar índice como key
            // (não aplicado, apenas comentado)

            title={tec.title}
            image={tec.image}

            // ALTERAÇÃO POSSÍVEL (ADIÇÃO):
            // ONDE: aqui
            // CÓDIGO:
            //   description={tec.description}
            // RESULTADO:
            //   passa mais dados para o card
            // (não aplicado, apenas comentado)
          />
        ))}
      </div>

      {}
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: este bloco vazio {}
          CÓDIGO:
            remover {}
          RESULTADO:
            JSX inútil novamente
          (não aplicado, apenas comentado) */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lista.map((tec: any, i: number) => (
          <Link
            key={i}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste key
            // CÓDIGO:
            //   key={tec.title}
            // RESULTADO:
            //   key estável
            // (não aplicado, apenas comentado)

            href={`/tecnologia/${i}`}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste href
            // CÓDIGO:
            //   href={`/tecnologias/${i}`}
            // RESULTADO:
            //   corrige rota se a pasta for /tecnologias
            // (não aplicado, apenas comentado)

            className="bg-white/10 p-4 rounded-xl shadow flex items-center gap-4"
          >
            <Image
              src={`/tecnologias/${tec.image}`}
              // ALTERAÇÃO POSSÍVEL:
              // ONDE: neste src
              // CÓDIGO:
              //   src={tec.image}
              // RESULTADO:
              //   usa caminho completo vindo do JSON
              // (não aplicado, apenas comentado)

              alt={`Logotipo de ${tec.title}`}
              // ALTERAÇÃO POSSÍVEL:
              // ONDE: neste alt
              // CÓDIGO:
              //   alt={tec.title}
              // RESULTADO:
              //   texto alternativo mais simples
              // (não aplicado, apenas comentado)

              width={120}
              height={120}
              // ALTERAÇÃO POSSÍVEL:
              // ONDE: nestes valores
              // CÓDIGO:
              //   width={80}
              //   height={80}
              // RESULTADO:
              //   reduz o tamanho da imagem
              // (não aplicado, apenas comentado)
            />

            <div>
              <h3 className="font-semibold text-lg">
                {tec.title}
                {/* ALTERAÇÃO POSSÍVEL:
                    ONDE: aqui
                    CÓDIGO:
                      (#{i})
                    RESULTADO:
                      mostra o índice da tecnologia
                    (não aplicado, apenas comentado) */}
              </h3>

              <p className="text-sm">
                {tec.description}
                {/* ALTERAÇÃO POSSÍVEL:
                    ONDE: aqui
                    CÓDIGO:
                      {tec.description.substring(0, 100)}...
                    RESULTADO:
                      descrição resumida
                    (não aplicado, apenas comentado) */}
              </p>

              <p className="text-yellow-400 mt-1">
                ⭐ {tec.rating}/5
                {/* ALTERAÇÃO POSSÍVEL:
                    ONDE: aqui
                    CÓDIGO:
                      ⭐ {Math.round(tec.rating)}/5
                    RESULTADO:
                      arredonda o rating
                    (não aplicado, apenas comentado) */}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ALTERAÇÃO POSSÍVEL (ADIÇÃO):
          ONDE: no final da página
          CÓDIGO:
            <p className="text-center text-sm mt-8">
              Total de tecnologias: {lista.length}
            </p>
          RESULTADO:
            informação extra no fim da página
          (não aplicado, apenas comentado) */}
    </div>
  );
}
