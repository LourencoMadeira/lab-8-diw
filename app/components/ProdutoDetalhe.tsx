"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";

const KEY = "favorites";
const IMG = "https://deisishop.pythonanywhere.com/";

interface Props {
  product: Product;
}

export function ProdutoDetalhe({ product }: Props) {
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
      <Link href="/produtos">← Voltar</Link>

      <h1>{product.title}</h1>

      <img
        src={IMG + product.image}
        width={250}
      />

      <div>
        <p>{product.price} €</p>
        <button onClick={toggleFav}>{fav ? "❤️" : "🤍"}</button>
      </div>

      <p>{product.description}</p>
    </div>
  );
}
