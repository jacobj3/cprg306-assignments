"use client";
import React, { useState } from "react";
import Item from "./item";

const categoryOrder = [
  "Bakery",
  "Canned Goods",
  "Dairy",
  "Dry Goods",
  "Household",
  "Meat",
  "Produce",
];

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
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

  const handleSortBy = (sortByValue) => {
    setSortBy(sortByValue);
  };

  return (
    <main>
      <div>
        <span className="sort">Sort by: </span>
        <button
          className="bg-orange-700 p-1 m-2 w-28"
          onClick={() => handleSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "#ff751a" : "" }}
        >
          Name
        </button>
        <button
          className="bg-orange-700 p-1 m-2 w-28"
          onClick={() => handleSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "#ff751a" : "" }}
        >
          Category
        </button>
      </div>

      <div>
        {sortBy === "groupedCategory" ? (
          categoryOrder.map((category) => (
            <ul key={category} style={{ listStyleType: "none" }}>
              <li>
                <h3 className="capitalize text-xl">{category}</h3>
              </li>
              {sortedItems
                .filter(
                  (item) =>
                    item.category.toLowerCase() === category.toLowerCase()
                )
                .map((item) => (
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
