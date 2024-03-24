"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems(userId, setItems) {
    try {
      const items = await getItems(userId);
      setItems(items);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  useEffect(() => {
    if (user) {
      loadItems(user.uid, setItems);
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      newItem.id = newItemId;
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
