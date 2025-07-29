import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function ProductList() {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

        useEffect(() => {
            async function fetchProducts() {
                  setLoading(true);
                        const { data, error } = await supabase.from('products').select('*');
                              if (error) {
                                      setError(error.message);
                                              setProducts([]);
                                                    } else {
                                                            setProducts(data);
                                                                    setError(null);
                                                                          }
                                                                                setLoading(false);
                                                                                    }

                                                                                        fetchProducts();
                                                                                          }, []);

                                                                                            return (
                                                                                                <div>
                                                                                                      <h1>Product List</h1>

                                                                                                            {loading && <p>Loading products...</p>}
                                                                                                                  {error && <p style={{ color: 'red' }}>Error: {error}</p>}

                                                                                                                        {!loading && !error && (
                                                                                                                                <ul>
                                                                                                                                          {products.map((product) => (
                                                                                                                                                      <li key={product.id}>
                                                                                                                                                                    {product.name} - ${product.price}
                                                                                                                                                                                </li>
                                                                                                                                                                                          ))}
                                                                                                                                                                                                  </ul>
                                                                                                                                                                                                        )}
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                              );
                                                                                                                                                                                                              }