import { useState, useEffect } from "react";
import axios from "axios";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterByCategory = (category) => {
    if (category) {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    } else {
      setFilteredProducts(products);
    }
  };

  const searchProducts = (query) => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return { filteredProducts, loading, filterByCategory, searchProducts, error };
};
