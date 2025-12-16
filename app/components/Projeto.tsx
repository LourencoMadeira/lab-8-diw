type ProjetoProps = {
  nome: string;
  url: string;

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta tipagem
  // CÓDIGO:
  //   descricao?: string;
  // RESULTADO:
  //   permite mostrar uma descrição adicional do projeto
  // (não aplicado, apenas comentado)
};

export default function Projeto({ nome, url }: ProjetoProps) {

  return (
    <div>
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: nesta <div>
          CÓDIGO:
            <div className="mb-4">
          RESULTADO:
            adiciona espaçamento entre projetos
          (não aplicado, apenas comentado) */}

      <p>
        Aqui podes ver o meu projeto sobre <strong>{nome}</strong>:{" "}

        <a
          href={url}
          target="_blank"
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: neste <a>
          // CÓDIGO:
          //   rel="noopener noreferrer"
          // RESULTADO:
          //   evita problemas de segurança ao abrir links externos
          // (não aplicado, apenas comentado)
        >
          {url}
        </a>

        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: no final do <p>
            CÓDIGO:
              🔗
            RESULTADO:
              adiciona um ícone visual ao link
            (não aplicado, apenas comentado) */}
      </p>

      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: após o <p>
          CÓDIGO:
            <hr />
          RESULTADO:
            adiciona separador visual entre projetos
          (não aplicado, apenas comentado) */}
    </div>
  );
}
