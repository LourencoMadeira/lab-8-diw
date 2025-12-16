"use client";
// ALTERAÇÃO POSSÍVEL:
// ONDE: esta linha no topo
// CÓDIGO:
//   remover "use client";
// RESULTADO:
//   página passa a Server Component
//   (atenção: useState deixa de funcionar)
// (não aplicado, apenas comentado)

import { useState } from "react";

export default function InputPage() {

  const [texto, setTexto] = useState("");
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: valor inicial
  // CÓDIGO:
  //   useState("Texto inicial");
  // RESULTADO:
  //   input começa já preenchido
  // (não aplicado, apenas comentado)

  const [categoria, setCategoria] = useState("React");
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: valor inicial
  // CÓDIGO:
  //   useState(categorias[0]);
  // RESULTADO:
  //   sincroniza categoria inicial com o array
  // (não aplicado, apenas comentado)

  const [tarefa, setTarefa] = useState("");
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: valor inicial
  // CÓDIGO:
  //   useState("Nova tarefa");
  // RESULTADO:
  //   campo de tarefa começa preenchido
  // (não aplicado, apenas comentado)

  const [lista, setLista] = useState<
    { id: number; nome: string; categoria: string; editar: boolean; temp: string }[]
  >([]);
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: tipo do estado
  // CÓDIGO:
  //   criar um type/interface Task
  // RESULTADO:
  //   melhora a legibilidade da tipagem
  // (não aplicado, apenas comentado)

  const categorias = ["React", "Next.js", "Tailwind", "TypeScript"];
  // ALTERAÇÃO POSSÍVEL:
  // ONDE: neste array
  // CÓDIGO:
  //   adicionar/remover strings
  // RESULTADO:
  //   altera automaticamente as opções do select
  // (não aplicado, apenas comentado)

  function adicionar() {
    if (!tarefa.trim()) return;
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: nesta validação
    // CÓDIGO:
    //   if (tarefa.length < 3) return;
    // RESULTADO:
    //   impede tarefas muito curtas
    // (não aplicado, apenas comentado)

    setLista([
      ...lista,
      {
        id: Date.now(),
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste id
        // CÓDIGO:
        //   id: lista.length + 1
        // RESULTADO:
        //   id sequencial em vez de timestamp
        // (não aplicado, apenas comentado)

        nome: tarefa,
        categoria,
        editar: false,
        temp: tarefa,
      },
    ]);

    setTarefa("");
  }

  function apagar(id: number) {
    setLista(lista.filter((t) => t.id !== id));
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: nesta função
    // CÓDIGO:
    //   if (!confirm("Apagar tarefa?")) return;
    // RESULTADO:
    //   pede confirmação antes de apagar
    // (não aplicado, apenas comentado)
  }

  function ativarEdicao(id: number) {
    setLista(
      lista.map((t) =>
        t.id === id ? { ...t, editar: true, temp: t.nome } : t
      )
    );
  }

  function guardar(id: number) {
    setLista(
      lista.map((t) =>
        t.id === id ? { ...t, nome: t.temp, editar: false } : t
      )
    );
    // ALTERAÇÃO POSSÍVEL:
    // ONDE: após guardar
    // CÓDIGO:
    //   if (!t.temp.trim()) return;
    // RESULTADO:
    //   impede guardar texto vazio
    // (não aplicado, apenas comentado)
  }

  function atualizarTemp(id: number, valor: string) {
    setLista(
      lista.map((t) =>
        t.id === id ? { ...t, temp: valor } : t
      )
    );
  }

  return (
    <div
      className="p-6 rounded-2xl mx-auto text-black"
      style={{ background: "#c4ddff", width: "70%" }}
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: neste style
      // CÓDIGO:
      //   remover style e usar classes Tailwind
      // RESULTADO:
      //   layout controlado apenas por Tailwind
      // (não aplicado, apenas comentado)
    >
      <h1 className="text-3xl font-bold mb-6 text-black">
        Input
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h1
            CÓDIGO:
              ({lista.length})
            RESULTADO:
              mostra número de tarefas
            (não aplicado, apenas comentado) */}
      </h1>

      <input
        className="w-full p-3 border rounded text-black mb-3"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste input
        // CÓDIGO:
        //   maxLength={50}
        // RESULTADO:
        //   limita o tamanho do texto
        // (não aplicado, apenas comentado)
      />

      <p className="mb-6 text-black">{texto}</p>

      <div className="flex items-center gap-3 mb-6">
        <input
          className="flex-1 p-2 border rounded text-black"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Nova tarefa..."
        />

        <select
          className="border p-2 rounded text-black"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((c, i) => (
            <option
              key={i}
              // ALTERAÇÃO POSSÍVEL:
              // ONDE: neste key
              // CÓDIGO:
              //   key={c}
              // RESULTADO:
              //   evita usar índice como key
              // (não aplicado, apenas comentado)
              value={c}
            >
              {c}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={adicionar}
          className="bg-gray-200 px-4 py-2 rounded text-black"
        >
          Adicionar tarefa
        </button>
      </div>

      <div className="space-y-4">
        {lista.map((t) => (
          <div
            key={t.id}
            className="border p-4 rounded-lg text-black"
            style={{ background: "#dbe8ff" }}
          >
            <h2 className="font-bold mb-2 text-black">
              {t.categoria}
            </h2>

            {t.editar ? (
              <div className="flex items-center gap-4">
                <input
                  className="border p-2 rounded text-black w-1/2"
                  value={t.temp}
                  onChange={(e) => atualizarTemp(t.id, e.target.value)}
                />

                <button
                  className="bg-green-300 px-4 py-2 rounded"
                  onClick={() => guardar(t.id)}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <>
                <p className="mb-3 text-black">{t.nome}</p>

                <div className="flex gap-3">
                  <button
                    className="bg-yellow-300 px-3 py-1 rounded"
                    onClick={() => ativarEdicao(t.id)}
                  >
                    Editar
                  </button>

                  <button
                    className="bg-red-300 px-3 py-1 rounded"
                    onClick={() => apagar(t.id)}
                  >
                    Apagar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
