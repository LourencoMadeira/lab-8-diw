import { Product } from "@/app/models/interfaces";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Props {
  product: Product;

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta interface
  // CÓDIGO:
  //   showRating?: boolean;
  // RESULTADO:
  //   permite controlar se o rating é mostrado
  // (não aplicado, apenas comentado)
}

export function Produto({ product }: Props) {

  return (
    <Card
      className="p-4"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="p-6"
      // RESULTADO:
      //   aumenta o espaçamento interno do card
      // (não aplicado, apenas comentado)
    >
      <CardHeader>
        <CardTitle className="text-2xl">
          {product.title}
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: dentro do CardTitle
              CÓDIGO:
                ({product.category})
              RESULTADO:
                mostra a categoria do produto
              (não aplicado, apenas comentado) */}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
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

        <p className="text-lg font-semibold">
          Preço: {product.price}€
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: nesta linha
              CÓDIGO:
                Preço: {product.price.toFixed(2)} €
              RESULTADO:
                força duas casas decimais
              (não aplicado, apenas comentado) */}
        </p>

        <p className="text-gray-700">
          {product.description}
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: aqui
              CÓDIGO:
                {product.description.substring(0, 100)}...
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
      </CardContent>
    </Card>
  );
}
