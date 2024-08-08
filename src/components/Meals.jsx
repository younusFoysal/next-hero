"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";

const Meals = () => {

    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);

    const loadMeals = async () => {
        const meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await meals.json();
        setMeals(data.meals) ;
    }

    const handler = (e) => {
      setSearch(e.target.value);
    };

    useEffect(() => {
        loadMeals()
    }, [search]);

    return (
        <div className="mt-12 ">
            <input
                onChange={handler}
                className="p-2 shadow rounded-l "
                   type="text"
                   placeholder="Search Meals"
            />
            <button className="btn shadow bg-green-600 p-2 rounded-r hover:bg-green-700">Search</button>
            <div className=" mt-12 grid grid-cols-3 gap-12">
                {meals?.map((meal) => <div key={meal?.idMeal} className="border-2 p-4">
                    <Image src={meal.strMealThumb} alt={meal.strMeal} width={500} height={500}/>
                    <h6>{meal.strMeal}</h6>
                    <p>{meal.strInstructions}</p>
                </div>)}

            </div>
        </div>
    );
};

export default Meals;