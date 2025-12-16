import Contador from "@/app/components/Contador";

export default function ContadorPage() {

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="min-h-screen bg-gray-100 p-8"
      // RESULTADO:
      //   remove o gradiente e usa fundo simples
      // (não aplicado, apenas comentado)
    >
      <h1
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: nesta className
        // CÓDIGO:
        //   className="text-3xl font-bold text-center mb-6 text-gray-800"
        // RESULTADO:
        //   reduz o tamanho do título
        // (não aplicado, apenas comentado)
      >
        Contador Interativo
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h1
            CÓDIGO:
              🔢
            RESULTADO:
              adiciona um ícone visual ao título
            (não aplicado, apenas comentado) */}
      </h1>

      <Contador
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste componente
        // CÓDIGO:
        //   <Contador initialValue={5} />
        // RESULTADO:
        //   permite iniciar o contador com um valor específico
        //   (apenas se o componente Contador aceitar essa prop)
        // (não aplicado, apenas comentado)
      />
    </div>
  );
}
