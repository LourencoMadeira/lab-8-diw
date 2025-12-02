import Projeto from "./Projeto";

export default function DescricaoProjetos() {
  return (
    <section>
      <h2>Lista de Projetos</h2>

      <p>
        Veja também todos os meus projetos no GitHub Pages:{" "}
        <a href="https://github.com/LourencoMadeira" target="_blank">https://github.com/LourencoMadeira</a>
      </p>

      <Projeto
        nome="O meu site"
        url="https://github.com/LourencoMadeira/LourencoMadeira.github.io"
      />

       <Projeto
        nome="Loja Deisi"
        url="https://github.com/LourencoMadeira/LourencoMadeira.github.io/tree/main/lab7"
      />

    </section>
  );
}