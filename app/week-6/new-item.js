import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity("1");
    setCategory("Produce");
  };

  return (
    <main className="flex justify-center w-full">
      <form
        className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-2">
          <input
            name="Item name"
            type="text"
            placeholder="Item name"
            required
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <input
            name="Quantity"
            type="number"
            min="1"
            max="99"
            required
            className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <select
            name="Category"
            className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
}
