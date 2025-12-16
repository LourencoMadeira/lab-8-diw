"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   o componente passa a Server Component
//   (atenção: useState, useEffect e setInterval deixam de funcionar)
// (não aplicado, apenas comentado)

import { useEffect, useState } from "react";

export default function Relogio() {

  const [hora, setHora] = useState(new Date());
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: valor inicial
  // CÓDIGO:
  //   useState(() => new Date());
  // RESULTADO:
  //   garante inicialização preguiçosa do estado
  // (não aplicado, apenas comentado)

  useEffect(() => {
    const id = setInterval(() => {
      setHora(new Date());

      // ALTERAÇÃO POSSÍVEL:
      // ONDE: dentro do setInterval
      // CÓDIGO:
      //   setHora((h) => new Date(h.getTime() + 1000));
      // RESULTADO:
      //   incrementa a hora anterior em vez de criar sempre nova Date
      // (não aplicado, apenas comentado)

    }, 1000);

    // ALTERAÇÃO POSSÍVEL:
    // ONDE: neste intervalo
    // CÓDIGO:
    //   500
    // RESULTADO:
    //   atualiza o relógio duas vezes por segundo
    // (não aplicado, apenas comentado)

    return () => {
      clearInterval(id);

      // ALTERAÇÃO POSSÍVEL:
      // ONDE: neste return
      // CÓDIGO:
      //   console.log("Relógio parado");
      // RESULTADO:
      //   indica quando o componente é desmontado
      // (não aplicado, apenas comentado)
    };
  }, []);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: array de dependências
  // CÓDIGO:
  //   [hora]
  // RESULTADO:
  //   recria o intervalo sempre que a hora muda
  //   (atenção: comportamento diferente, cria vários intervalos)
  // (não aplicado, apenas comentado)

  return (
    <span
      className="font-mono"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="font-mono text-lg"
      // RESULTADO:
      //   aumenta o tamanho do texto do relógio
      // (não aplicado, apenas comentado)
    >
      {hora.toLocaleTimeString("pt-PT")}
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: neste método
          CÓDIGO:
            hora.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })
          RESULTADO:
            mostra apenas horas e minutos
          (não aplicado, apenas comentado) */}
    </span>
  );
}
