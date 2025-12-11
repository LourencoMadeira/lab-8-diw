import { Product } from "@/app/models/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export function ProdutoDetalhe({ product }: Props) {
  return (
    <div className="max-w-xl mx-auto p-4 border rounded shadow space-y-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>

      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="rounded object-contain mx-auto"
      />

      <p className="text-xl font-semibold">{product.price} €</p>

      <p className="text-gray-700">{product.description}</p>

      <p className="text-sm">
        <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
      </p>

      <Link href="/produtos">
        <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
          Voltar
        </button>
      </Link>
    </div>
  );
}
