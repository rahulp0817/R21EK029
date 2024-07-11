import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">{product.company}</p>
      <p className="text-gray-700 text-base">{product.category}</p>
      <p className="text-gray-700 text-base">${product.price}</p>
      <p className="text-gray-700 text-base">Rating: {product.rating}</p>
      <p className="text-gray-700 text-base">Discount: {product.discount}%</p>
      <p className="text-gray-700 text-base">
        Availability: {product.availability ? "In stock" : "Out of stock"}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <Link
        to={`/product/${product.id}`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
