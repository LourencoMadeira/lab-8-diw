"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/app/models/interfaces";

const KEY = "favorites";
const IMG = "https://deisishop.pythonanywhere.com/";

interface Props {
  product: Product;
  addToCart: () => void;
}

export function ProductCard({ product, addToCart }: Props) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(KEY) || "[]");
    setFav(list.includes(product.id));
  }, [product.id]);

  function toggleFav() {
    let list = JSON.parse(localStorage.getItem(KEY) || "[]");

    if (list.includes(product.id)) {
      list = list.filter((id: number) => id !== product.id);
      setFav(false);
    } else {
      list.push(product.id);
      setFav(true);
    }

    localStorage.setItem(KEY, JSON.stringify(list));
  }

  return (
    <div>
      <img
        src={IMG + product.image}
        width={180}
      />

      <div>
        <p>{product.price} €</p>
        <button onClick={toggleFav}>
          {fav ? "❤️" : "🤍"}
        </button>
      </div>

      <Link href={`/produtos/${product.id}`}>+ info</Link>

      <button onClick={addToCart}>Adicionar</button>
    </div>
  );
}
