import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";

const IMG = "https://deisishop.pythonanywhere.com/";

interface Props {
  product: Product;
  addToCart: () => void;
}

export function ProductCard({ product, addToCart }: Props) {
  return (
    <Card className="hover:shadow-lg transition p-2">
      <CardHeader>
        <CardTitle className="line-clamp-2">{product.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <img
          src={IMG + product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded"
        />

        <p className="text-lg font-semibold">{product.price}€</p>

        <div className="flex gap-2">
          <Link href={`/produtos/${product.id}`} className="flex-1">
            <button className="w-full px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              + info
            </button>
          </Link>

          <button
            onClick={addToCart}
            className="flex-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Adicionar
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
