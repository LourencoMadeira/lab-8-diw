export default function Page() {

  return (
    <>
      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: neste fragment <>
          CÓDIGO:
            <main>
          RESULTADO:
            substitui Fragment por um elemento semântico
          (não aplicado, apenas comentado) */}

      <h2>
        Desenvolvimento Web Moderno
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h2
            CÓDIGO:
              (2025)
            RESULTADO:
              adiciona contexto temporal ao título
            (não aplicado, apenas comentado) */}
      </h2>

      <ul>
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: nesta <ul>
            CÓDIGO:
              <ul className="list-disc pl-6">
            RESULTADO:
              adiciona marcadores visuais à lista
            (não aplicado, apenas comentado) */}

        <li>
          React e Next.js revolucionaram a criação de interfaces web.
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: dentro do <li>
              CÓDIGO:
                <strong>React</strong>
              RESULTADO:
                destaca palavra-chave
              (não aplicado, apenas comentado) */}
        </li>

        <li>
          São usados por empresas como Facebook, Netflix e Airbnb.
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: aqui
              CÓDIGO:
                (Big Tech)
              RESULTADO:
                acrescenta contexto
              (não aplicado, apenas comentado) */}
        </li>

        <li>
          Dominar estas tecnologias abre muitas oportunidades!
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: aqui
              CÓDIGO:
                🚀
              RESULTADO:
                adiciona elemento visual
              (não aplicado, apenas comentado) */}
        </li>
      </ul>

      {/* ALTERAÇÃO POSSÍVEL:
          ONDE: no final
          CÓDIGO:
            <p>Última atualização: 2025</p>
          RESULTADO:
            adiciona informação extra
          (não aplicado, apenas comentado) */}
    </>
  );
}
