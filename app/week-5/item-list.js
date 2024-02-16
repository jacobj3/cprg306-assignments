"use client";
import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

const categoryOrder = [
  "Bakery",
  "Canned Goods",
  "Dairy",
  "Dry Goods",
  "Household",
  "Meat",
  "Produce",
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "groupedCategory") {
      const categoryIndexA = categoryOrder.indexOf(a.category);
      const categoryIndexB = categoryOrder.indexOf(b.category);
      if (categoryIndexA === categoryIndexB) {
        return a.name.localeCompare(b.name);
      }
      return categoryIndexA - categoryIndexB;
    }
    return 0;
  });

  return (
    <main>
      <div>
        <label className="sort">Sort by: </label>
        <button
          className="bg-orange-700 p-1 m-2 w-28"
          onClick={() => setSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "#ff751a" : "" }}
        >
          Name
        </button>
        <button
          className="bg-orange-700 p-1 m-2 w-28"
          onClick={() => setSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "#ff751a" : "" }}
        >
          Category
        </button>
        <button
          className="bg-orange-700 p-1 m-2 w-28"
          onClick={() => setSortBy("groupedCategory")}
          style={{
            backgroundColor: sortBy === "groupedCategory" ? "#ff751a" : "",
          }}
        >
          Grouped Category
        </button>
        <label
          className="absolute top-20 left-240 text-gray-600 text-xs italic"
          htmlFor="group-category"
        >
          ← "Grouped Category" is an optional extra challenge
        </label>
      </div>

      <div>
        {sortBy === "groupedCategory" ? (
          categoryOrder.map((category) => (
            <div key={category}>
              <h3 className="capitalize text-xl">{category}</h3>
              {sortedItems
                .filter(
                  (item) =>
                    item.category.toLowerCase() === category.toLowerCase()
                )
                .map((item) => (
                  <div key={item.id}>
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                      groupedCategory={item.category}
                    />
                  </div>
                ))}
            </div>
          ))
        ) : (
          <ul>
            {sortedItems.map((item) => (
              <li key={item.id}>
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  groupedCategory={item.category}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
