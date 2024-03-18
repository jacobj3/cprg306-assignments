"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <main>
      <div>
        {meals ? (
          <div>
            <p className="m-2">Here are some meal ideas using {ingredient}: </p>
            <ul className="p-2 bg-slate-800" style={{ cursor: "pointer" }}>
              {" "}
              {meals.map((meal) => (
                <li
                  className="m-2 p-2 bg-slate-600 hover:bg-blue-600"
                  key={meal.idMeal}
                >
                  <p>{meal.strMeal}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="m-2">No meal ideas found for {ingredient}.</p>
        )}
      </div>
    </main>
  );
}
