import Projeto from "@/components/Projeto/Projeto";

export default function DescricaoProjetos() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Aqui estão alguns dos projetos que desenvolvi:
        <a
          href="https://github.com/LourencoMadeira/LourencoMadeira.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline ml-1"
        >
          GitHub Pages
        </a>
      </p>
      <Projeto
        nome="Loja Online"
        url="https://lourencomadeira.github.io/lab7/index.html"
      />
      <Projeto
        nome="O meu site"
        url="https://lourencomadeira.github.io/"
      />
    </div>
  );
}