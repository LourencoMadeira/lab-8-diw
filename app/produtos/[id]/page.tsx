"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProdutoDetalhe } from "@/app/components/ProdutoDetalhe";
import { Product } from "@/app/models/interfaces";
import { saveRecentProduct } from "@/app/components/RecentProducts";

export default function ProdutoPage() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isNaN(productId)) {
      setLoading(false);
      return;
    }

    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://deisishop.pythonanywhere.com/products/${productId}`
        );

        if (!res.ok) {
          setProduct(null);
          return;
        }

        const data = await res.json();
        setProduct(data);
        saveRecentProduct(data);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  if (loading) return <p>A carregar…</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className="p-6">
      <ProdutoDetalhe product={product} />
    </div>
  );
}
