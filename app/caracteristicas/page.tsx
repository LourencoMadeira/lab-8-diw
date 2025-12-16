"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   a página passa a Server Component
//   (atenção: só possível se o componente <Caracteristica /> também for compatível)
// (não aplicado, apenas comentado)

import Caracteristica from "@/app/components/Caracteristica";

export default function CaracteristicasPage() {

  const caracteristicas = [
    "JSX, sintaxe que mistura HTML e JS.",
    "Componentes, funções que retornam JSX.",
    "Componentes Reutilizáveis e Modulares.",
    "Roteamento Automático e APIs.",
    "Hooks: useState, useEffect e useSWR.",
    "Renderização Rápida e SEO Friendly.",
    "TypeScript Seguro e Escalável.",
    "Comunidade Ativa e Popularidade."
  ];
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: neste array
  // CÓDIGO:
  //   adicionar ou remover strings
  // RESULTADO:
  //   altera automaticamente o número de cards renderizados
  // (não aplicado, apenas comentado)

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">
        Características
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h2
            CÓDIGO:
              ({caracteristicas.length})
            RESULTADO:
              mostra o número total de características
            (não aplicado, apenas comentado) */}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caracteristicas.map((c, i) => (
          <Caracteristica
            key={i}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste key
            // CÓDIGO:
            //   key={c}
            // RESULTADO:
            //   evita problemas caso a ordem do array mude
            // (não aplicado, apenas comentado)

            texto={c}
            index={i}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: aqui nos props
            // CÓDIGO:
            //   isLast={i === caracteristicas.length - 1}
            // RESULTADO:
            //   permite lógica condicional dentro do componente Caracteristica
            // (não aplicado, apenas comentado)
          />
        ))}
      </div>
    </div>
  );
}
