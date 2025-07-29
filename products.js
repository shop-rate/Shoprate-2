import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient"; // Your Supabase client config

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    let { data, error } = await supabase.from("products").select("*");
    if (error) console.error("Error loading products:", error);
    else setProducts(data);
    setLoading(false);
  }

  return (
    <div>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {!loading && products.length === 0 && <p>No products found.</p>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}
