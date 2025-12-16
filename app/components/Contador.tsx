"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo do ficheiro
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   o componente passa a Server Component
//   (atenção: localStorage, useState e useEffect deixam de funcionar)
// (não aplicado, apenas comentado)

import { useState, useEffect } from "react";

export default function Contador() {

  const STORAGE_KEY = "contador_valor";
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta constante
  // CÓDIGO:
  //   const STORAGE_KEY = "contador";
  // RESULTADO:
  //   altera a chave usada no localStorage
  // (não aplicado, apenas comentado)

  const [contador, setContador] = useState(0);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: valor inicial
  // CÓDIGO:
  //   useState(5);
  // RESULTADO:
  //   o contador começa noutro valor
  // (não aplicado, apenas comentado)

  const [historico, setHistorico] = useState<number[]>([]);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: valor inicial
  // CÓDIGO:
  //   useState<number[]>([0]);
  // RESULTADO:
  //   histórico começa já com o valor inicial
  // (não aplicado, apenas comentado)

  useEffect(() => {
    const valorSalvo = localStorage.getItem(STORAGE_KEY);
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: após o getItem
    // CÓDIGO:
    //   if (valorSalvo === null) return;
    // RESULTADO:
    //   evita conversão quando não existe valor guardado
    // (não aplicado, apenas comentado)

    if (valorSalvo) {
      const valor = Number(valorSalvo);
      setContador(valor);
      setHistorico([valor]);
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta linha
      // CÓDIGO:
      //   setHistorico([]);
      // RESULTADO:
      //   histórico começa vazio mesmo com valor guardado
      // (não aplicado, apenas comentado)
    }
  }, []);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: array de dependências
  // CÓDIGO:
  //   [STORAGE_KEY]
  // RESULTADO:
  //   o efeito volta a correr se a chave mudar
  // (não aplicado, apenas comentado)

  useEffect(() => {
    if (historico.length > 0) {
      localStorage.setItem(STORAGE_KEY, String(contador));
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta linha
      // CÓDIGO:
      //   localStorage.clear();
      // RESULTADO:
      //   limpa todo o localStorage
      // (não aplicado, apenas comentado)
    }
  }, [contador, historico.length]);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: dependências
  // CÓDIGO:
  //   [contador]
  // RESULTADO:
  //   guarda sempre o valor, mesmo sem histórico
  // (não aplicado, apenas comentado)

  const incrementar = () => {
    if (contador < 10) {
      const novoValor = contador + 1;
      setContador(novoValor);
      setHistorico([...historico, novoValor]);

      // ALTERAÇÃO POSSÍVEL:
      // ONDE: dentro do if
      // CÓDIGO:
      //   setHistorico((h) => [...h, novoValor]);
      // RESULTADO:
      //   evita usar histórico antigo em renders consecutivos
      // (não aplicado, apenas comentado)
    }
  };

  const decrementar = () => {
    if (contador > 0) {
      const novoValor = contador - 1;
      setContador(novoValor);
      setHistorico([...historico, novoValor]);
    }
  };

  const reset = () => {
    setContador(0);
    setHistorico([0]);

    // ALTERAÇÃO POSSÍVEL:
    // ONDE: nesta função
    // CÓDIGO:
    //   setHistorico([]);
    // RESULTADO:
    //   limpa completamente o histórico
    // (não aplicado, apenas comentado)
  };

  const getColor = () => {
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: nesta função
    // CÓDIGO:
    //   if (contador < 5) return "text-red-500";
    // RESULTADO:
    //   altera os intervalos de cores
    // (não aplicado, apenas comentado)

    if (contador >= 0 && contador <= 3) return "text-red-500";
    if (contador >= 4 && contador <= 7) return "text-yellow-500";
    if (contador >= 8 && contador <= 10) return "text-green-500";
    return "text-gray-800";
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">Valor atual:</p>

          <p className={`text-8xl font-bold ${getColor()} transition-colors duration-300`}>
            {contador}
            {/* ALTERAÇÃO POSSÍVEL:
                ONDE: dentro do <p>
                CÓDIGO:
                  / 10
                RESULTADO:
                  mostra o limite máximo do contador
                (não aplicado, apenas comentado) */}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Intervalo: [0 - 10]
            {/* ALTERAÇÃO POSSÍVEL:
                ONDE: aqui
                CÓDIGO:
                  ({historico.length} ações)
                RESULTADO:
                  mostra quantas ações foram feitas
                (não aplicado, apenas comentado) */}
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={decrementar}
            disabled={contador === 0}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste botão
            // CÓDIGO:
            //   disabled={contador <= 1}
            // RESULTADO:
            //   impede decrementar abaixo de 1
            // (não aplicado, apenas comentado)
            className="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            - Decrementar
          </button>
          
          <button
            onClick={reset}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste botão
            // CÓDIGO:
            //   onClick={() => window.confirm("Resetar?") && reset()}
            // RESULTADO:
            //   pede confirmação antes do reset
            // (não aplicado, apenas comentado)
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            ↻ Reset
          </button>
          
          <button
            onClick={incrementar}
            disabled={contador === 10}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            + Incrementar
          </button>
        </div>

        <div className="flex gap-4 text-center text-sm text-gray-600 border-t pt-4">
          <div className="flex-1">
            <span className="font-semibold text-red-500">Vermelho:</span> 0-3
          </div>
          <div className="flex-1">
            <span className="font-semibold text-yellow-500">Amarelo:</span> 4-7
          </div>
          <div className="flex-1">
            <span className="font-semibold text-green-500">Verde:</span> 8-10
          </div>
        </div>
      </div>

      {historico.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Histórico de Valores
            {/* ALTERAÇÃO POSSÍVEL:
                ONDE: no título
                CÓDIGO:
                  ({historico.length})
                RESULTADO:
                  mostra quantos valores existem no histórico
                (não aplicado, apenas comentado) */}
          </h2>

          <ul className="flex flex-wrap gap-2">
            {historico.map((valor, index) => (
              <li
                key={index}
                // ALTERAÇÃO POSSÍVEL:
                // ONDE: neste key
                // CÓDIGO:
                //   key={`${valor}-${index}`}
                // RESULTADO:
                //   evita conflito se valores repetirem
                // (não aplicado, apenas comentado)
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {valor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
