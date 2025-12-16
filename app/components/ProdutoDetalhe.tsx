import { Product } from "@/app/models/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta interface
  // CÓDIGO:
  //   showBackButton?: boolean;
  // RESULTADO:
  //   permite controlar se o botão "Voltar" aparece
  // (não aplicado, apenas comentado)
}

export function ProdutoDetalhe({ product }: Props) {

  return (
    <div
      className="max-w-xl mx-auto p-4 border rounded shadow space-y-4"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="max-w-2xl mx-auto p-6 border rounded-xl shadow-lg space-y-6"
      // RESULTADO:
      //   altera o layout e espaçamento do container
      // (não aplicado, apenas comentado)
    >
      <h1 className="text-3xl font-bold">
        {product.title}
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: dentro do h1
            CÓDIGO:
              ({product.category})
            RESULTADO:
              mostra a categoria do produto
            (não aplicado, apenas comentado) */}
      </h1>

      <Image
        src={product.image}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste src
        // CÓDIGO:
        //   src={`https://deisishop.pythonanywhere.com/${product.image}`}
        // RESULTADO:
        //   força URL completa da imagem
        // (não aplicado, apenas comentado)

        alt={product.title}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste alt
        // CÓDIGO:
        //   alt={`Imagem do produto ${product.title}`}
        // RESULTADO:
        //   texto alternativo mais descritivo
        // (não aplicado, apenas comentado)

        width={400}
        height={400}
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: nestes valores
        // CÓDIGO:
        //   width={500}
        //   height={500}
        // RESULTADO:
        //   aumenta o tamanho da imagem
        // (não aplicado, apenas comentado)

        className="rounded object-contain mx-auto"
      />

      <p className="text-xl font-semibold">
        {product.price} €
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: nesta linha
            CÓDIGO:
              {product.price.toFixed(2)} €
            RESULTADO:
              força duas casas decimais
            (não aplicado, apenas comentado) */}
      </p>

      <p className="text-gray-700">
        {product.description}
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: aqui
            CÓDIGO:
              {product.description.substring(0, 150)}...
            RESULTADO:
              mostra descrição resumida
            (não aplicado, apenas comentado) */}
      </p>

      <p className="text-sm">
        <strong>Rating:</strong>{" "}
        {product.rating.rate} ⭐ ({product.rating.count} reviews)
        {/* ALTERAÇÃO POSSÍVEL:
            ONDE: nesta linha
            CÓDIGO:
              ({product.rating.count} avaliações)
            RESULTADO:
              altera o texto apresentado
            (não aplicado, apenas comentado) */}
      </p>

      <Link
        href="/produtos"
        // ALTERAÇÃO POSSÍVEL:
        // ONDE: neste href
        // CÓDIGO:
        //   href="/"
        // RESULTADO:
        //   botão passa a voltar para a página inicial
        // (não aplicado, apenas comentado)
      >
        <button
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: nesta className
          // CÓDIGO:
          //   className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          // RESULTADO:
          //   altera o estilo do botão
          // (não aplicado, apenas comentado)
        >
          Voltar
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: dentro do botão
              CÓDIGO:
                ←
              RESULTADO:
                adiciona ícone ao botão
              (não aplicado, apenas comentado) */}
        </button>
      </Link>
    </div>
  );
}
