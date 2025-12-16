import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";

const IMG = "https://deisishop.pythonanywhere.com/";
// ALTERAÇÃO POSSÍVEL:
// ONDE: nesta constante
// CÓDIGO:
//   const IMG = process.env.NEXT_PUBLIC_API_URL + "/";
// RESULTADO:
//   altera a origem das imagens para variável de ambiente
// (não aplicado, apenas comentado)

interface Props {
  product: Product;
  addToCart: () => void;

  // ALTERAÇÃO POSSÍVEL:
  // ONDE: nesta interface
  // CÓDIGO:
  //   showPrice?: boolean;
  // RESULTADO:
  //   permite controlar se o preço é mostrado ou não
  // (não aplicado, apenas comentado)
}

export function ProductCard({ product, addToCart }: Props) {

  return (
    <Card
      className="hover:shadow-lg transition p-2"
      // ALTERAÇÃO POSSÍVEL:
      // ONDE: nesta className
      // CÓDIGO:
      //   className="hover:shadow-2xl transition-all p-4"
      // RESULTADO:
      //   altera o efeito visual do card
      // (não aplicado, apenas comentado)
    >
      <CardHeader>
        <CardTitle className="line-clamp-2">
          {product.title}
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: dentro do CardTitle
              CÓDIGO:
                ({product.category})
              RESULTADO:
                mostra também a categoria do produto
              (não aplicado, apenas comentado) */}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <img
          src={IMG + product.image}
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: neste src
          // CÓDIGO:
          //   src={product.image}
          // RESULTADO:
          //   usa URL completa vinda da API
          // (não aplicado, apenas comentado)

          alt={product.title}
          // ALTERAÇÃO POSSÍVEL:
          // ONDE: neste alt
          // CÓDIGO:
          //   alt={`Imagem do produto ${product.title}`}
          // RESULTADO:
          //   texto alternativo mais descritivo
          // (não aplicado, apenas comentado)

          className="w-full h-40 object-cover rounded"
        />

        <p className="text-lg font-semibold">
          {product.price}€
          {/* ALTERAÇÃO POSSÍVEL:
              ONDE: nesta linha
              CÓDIGO:
                {product.price.toFixed(2)} €
              RESULTADO:
                força duas casas decimais no preço
              (não aplicado, apenas comentado) */}
        </p>

        <div className="flex gap-2">
          <Link
            href={`/produtos/${product.id}`}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste href
            // CÓDIGO:
            //   href={`/produtos/${product.id}?from=card`}
            // RESULTADO:
            //   permite identificar a origem da navegação
            // (não aplicado, apenas comentado)
            className="flex-1"
          >
            <button
              // ALTERAÇÃO POSSÍVEL:
              // ONDE: neste botão
              // CÓDIGO:
              //   disabled={!product}
              // RESULTADO:
              //   desativa o botão se o produto não existir
              // (não aplicado, apenas comentado)
              className="w-full px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              + info
            </button>
          </Link>

          <button
            onClick={addToCart}
            // ALTERAÇÃO POSSÍVEL:
            // ONDE: neste onClick
            // CÓDIGO:
            //   onClick={() => addToCart()}
            // RESULTADO:
            //   chamada explícita da função
            // (não aplicado, apenas comentado)

            className="flex-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Adicionar
            {/* ALTERAÇÃO POSSÍVEL:
                ONDE: dentro do botão
                CÓDIGO:
                  🛒
                RESULTADO:
                  adiciona ícone visual ao botão
                (não aplicado, apenas comentado) */}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
