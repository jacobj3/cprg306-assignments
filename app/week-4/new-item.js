"use client";

import React, { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("Produce");
  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
    setName("");
    setQuantity("1");
    setCategory("Produce");
  };
  return (
    <main class="flex justify-center w-full">
      <form
        class="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <div class="mb-2">
          <input
            type="text"
            placeholder="Item name"
            required
            class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="flex justify-between">
          <input
            type="number"
            min="1"
            max="99"
            required
            class="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <select
            class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Baker">Baker</option>
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
          class="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
}
