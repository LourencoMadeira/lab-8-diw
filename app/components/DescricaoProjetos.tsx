import Projeto from "./Projeto";

export default function DescricaoProjetos() {

  return (
    <section>
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: nesta tag <section>
          CÓDIGO:
            <section className="p-6">
          RESULTADO:
            adiciona espaçamento interno à secção
          (não aplicado, apenas comentado) */}

      <h2>
        Lista de Projetos
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h2
            CÓDIGO:
              ({2})
            RESULTADO:
              indica quantos projetos estão listados
            (não aplicado, apenas comentado) */}
      </h2>

      <p>
        Veja também todos os meus projetos no GitHub Pages:{" "}
        <a
          href="https://github.com/LourencoMadeira"
          target="_blank"
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: neste <a>
          // CÓDIGO:
          //   rel="noopener noreferrer"
          // RESULTADO:
          //   evita problemas de segurança ao abrir nova aba
          // (não aplicado, apenas comentado)
        >
          https://github.com/LourencoMadeira
        </a>
      </p>

      <Projeto
        nome="O meu site"
        url="https://github.com/LourencoMadeira/LourencoMadeira.github.io"
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste componente
        // CÓDIGO:
        //   descricao="Site pessoal com portefólio"
        // RESULTADO:
        //   passa mais informação para o componente Projeto
        // (não aplicado, apenas comentado)
      />

      <Projeto
        nome="Loja Deisi"
        url="https://github.com/LourencoMadeira/LourencoMadeira.github.io/tree/main/lab7"
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste componente
        // CÓDIGO:
        //   destaque={true}
        // RESULTADO:
        //   permite estilizar este projeto de forma diferente
        // (não aplicado, apenas comentado)
      />

      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: após o último <Projeto />
          CÓDIGO:
            <Projeto nome="Novo Projeto" url="URL_DO_PROJETO" />
          RESULTADO:
            adiciona mais um projeto à lista
          (não aplicado, apenas comentado) */}
    </section>
  );
}
