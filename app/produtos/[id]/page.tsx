"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProdutoDetalhe } from "@/app/components/ProdutoDetalhe";
import { Product } from "@/app/models/interfaces";

export default function ProdutoPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://deisishop.pythonanywhere.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p>A carregar…</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className="p-6">
      <ProdutoDetalhe product={product} />
    </div>
  );
}
