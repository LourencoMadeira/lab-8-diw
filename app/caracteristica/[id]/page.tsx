"use client"; 
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   o componente deixa de ser Client Component e passa a Server Component
//   (atenção: useParams deixa de funcionar, teria de receber params por props)
// (não aplicado, apenas comentado)

import { useParams } from "next/navigation";
import lista from "@/app/data/caracteristicas.json";
import Link from "next/link";

export default function CaracteristicaPage() {

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
  // ONDE: nesta linha
  // CÓDIGO:
  //   const index = parseInt(id as string, 10);
  // RESULTADO:
  //   evita conversões inesperadas (ex: Number(undefined) = NaN)
  // (não aplicado, apenas comentado)

  const texto = lista[index];
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: logo após esta linha
  // CÓDIGO:
  //   if (isNaN(index)) { /* tratar erro */ }
  // RESULTADO:
  //   impede acesso inválido ao array quando o id não é numérico
  // (não aplicado, apenas comentado)

  if (!texto) {
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: dentro deste if
    // CÓDIGO:
    //   notFound();
    // RESULTADO:
    //   em vez de mostrar UI manual, força página 404 do Next.js
    // (não aplicado, apenas comentado)

    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          Característica não encontrada
        </h2>

        <Link
          href="/caracteristicas"
          className="bg-blue-500 px-4 py-2 rounded text-white shadow"
        >
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-center">
        {texto}
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do JSX
            CÓDIGO:
              #{index}
            RESULTADO:
              mostra também o índice da característica
            (não aplicado, apenas comentado) */}
      </h2>

      <Link
        href="/caracteristicas"
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste Link
        // CÓDIGO:
        //   href={`/caracteristicas/${index - 1}`}
        // RESULTADO:
        //   botão passa a navegar para a característica anterior
        // (não aplicado, apenas comentado)
        className="bg-blue-500 px-4 py-2 rounded text-white shadow"
      >
        Voltar
      </Link>
    </div>
  );
}
