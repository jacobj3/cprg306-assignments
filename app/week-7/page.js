"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanedItem;
    if (item.name.includes(",")) {
      cleanedItem = item.name.replace(/,.*/, "");
    } else {
      const regexEmoji = /[\u{1F300}-\u{1F9FF}]/gu;
      cleanedItem = item.name.replace(regexEmoji, "");
    }
    if (cleanedItem) {
      setSelectedItemName(cleanedItem);
    } else {
      console.error("Error: Unable to extract meal name from selected item.");
    }
  };

  return (
    <main>
      <div className="max-w-xxl w-full flex">
        <div className="flex-1 max-w-sm">
          <h1 className="text-3xl font-bold m-2 mb-10">Shopping List</h1>
          <h2 className="text-xl font-bold">Add New Item</h2>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <h1 className="text-3xl font-bold">Meal Ideas</h1>
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p className="m-2 p-2 bg-slate-800">
              Click an item to get meal ideas.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
