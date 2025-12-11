import { Product } from "@/app/models/interfaces";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Props {
  product: Product;
}

export function Produto({ product }: Props) {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl">{product.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="rounded object-contain mx-auto"
        />

        <p className="text-lg font-semibold">Preço: {product.price}€</p>

        <p className="text-gray-700">{product.description}</p>

        <p className="text-sm">
          <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
        </p>
      </CardContent>
    </Card>
  );
}
