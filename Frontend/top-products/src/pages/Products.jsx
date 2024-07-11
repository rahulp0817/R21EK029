import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [filters, sortOrder]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products", {
        params: { ...filters, sort: sortOrder },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="container mx-auto ">
      <Filter onFilterChange={handleFilterChange} />
      <div className="mt-4">
        <select onChange={handleSortChange} className="p-10 border rounded   ">
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="discount">Discount</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
