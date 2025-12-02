type ProjetoProps = {
  nome: string;
  url: string;
};

export default function Projeto({ nome, url }: ProjetoProps) {
  return (
    <div>
      <p>
        Aqui podes ver o meu projeto sobre <strong>{nome}</strong>:{" "}
        <a href={url} target="_blank">{url}</a>
      </p>
    </div>
  );
}