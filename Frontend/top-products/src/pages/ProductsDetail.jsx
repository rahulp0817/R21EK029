import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.company}</p>
          <p className="text-gray-700 text-base">{product.category}</p>
          <p className="text-gray-700 text-base">${product.price}</p>
          <p className="text-gray-700 text-base">Rating: {product.rating}</p>
          <p className="text-gray-700 text-base">
            Discount: {product.discount}%
          </p>
          <p className="text-gray-700 text-base">
            Availability: {product.availability ? "In stock" : "Out of stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
