import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState("");
  const [dicount, setDiscount] = useState("");
  const [availability, setAvailability] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ category, company, rating, dicount, availability });
  };

  return (
    <div className="flex flex-col space-y-10 gap-4 ">
      <input
        type="text"
        placeholder="Product Name"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded "
      />
      <input
        type="text"
        placeholder="Price"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="dicount"
        value={dicount}
        onChange={(e) => setDiscount(e.target.value)}
        className="p-2 border rounded"
      />
      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Availability</option>
        <option value="in_stock">In stock</option>
        <option value="out_of_stock">Out of stock</option>
      </select>
      <button
        onClick={handleFilterChange}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
