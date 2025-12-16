import DescricaoProjetos from "../components/DescricaoProjetos";
// ALTERAÇÃO POSSÍVEL:
// ONDE: neste import
// CÓDIGO:
//   import DescricaoProjetos from "@/app/components/DescricaoProjetos";
// RESULTADO:
//   usa alias absoluto em vez de caminho relativo
// (não aplicado, apenas comentado)

export default function ProjetosPage() {

  return (
    <main>
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: nesta tag <main>
          CÓDIGO:
            <main className="p-6 max-w-4xl mx-auto">
          RESULTADO:
            adiciona layout e centraliza conteúdo
          (não aplicado, apenas comentado) */}

      <h1>
        Projetos
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h1
            CÓDIGO:
              (Portefólio)
            RESULTADO:
              adiciona subtítulo no título principal
            (não aplicado, apenas comentado) */}
      </h1>

      <DescricaoProjetos
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste componente
        // CÓDIGO:
        //   showGithubLink={false}
        // RESULTADO:
        //   permite esconder o link do GitHub
        //   (caso a prop exista)
        // (não aplicado, apenas comentado)
      />

      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: após o componente
          CÓDIGO:
            <footer>© 2025</footer>
          RESULTADO:
            adiciona rodapé à página
          (não aplicado, apenas comentado) */}
    </main>
  );
}
