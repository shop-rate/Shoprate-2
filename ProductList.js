import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export default function ProductList() {
  const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

      useEffect(() => {
          async function fetchProducts() {
                const { data, error } = await supabase.from('products').select('*');
                      if (error) {
                              setError(error.message);
                                    } else {
                                            setProducts(data);
                                                  }
                                                      }
                                                          fetchProducts();
                                                            }, []);

                                                              if (error) return <div>Error: {error}</div>;
                                                                if (!products.length) return <div>Loading products...</div>;

                                                                  return (
                                                                      <div>
                                                                            <h2>Product List</h2>
                                                                                  <ul>
                                                                                          {products.map((p) => (
                                                                                                    <li key={p.id}>{p.name} - ${p.price}</li>
                                                                                                            ))}
                                                                                                                  </ul>
                                                                                                                      </div>
                                                                                                                        );
                                                                                                                        }