"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/app/models/interfaces";

const KEY = "recent_products";

export default function RecentProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  if (products.length === 0) return null;

  return (
    <div style={{ display: "flex", gap: "16px", overflowX: "auto" }}>
      {products.map((p) => (
        <div key={p.id}>
          <img
            src={`https://deisishop.pythonanywhere.com/${p.image}`}
            width={80}
          />
          <p>{p.price} €</p>
          <Link href={`/produtos/${p.id}`}>+ info</Link>
        </div>
      ))}
    </div>
  );
}

export function saveRecentProduct(product: Product) {
  const saved = localStorage.getItem(KEY);
  let list: Product[] = saved ? JSON.parse(saved) : [];

  list = list.filter((p) => p.id !== product.id);
  list.unshift(product);
  list = list.slice(0, 5);

  localStorage.setItem(KEY, JSON.stringify(list));
}
