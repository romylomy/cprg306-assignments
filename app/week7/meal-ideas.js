"use client"
import {useState, useEffect } from 'react'



export default function MealIdeas({ mealList, ingredient }) {
    console.log(mealList);
  
    return (
      <div className='  md:p-10 md:w-1/2   '>
        <h1 className='text-3xl'>Meal ideas</h1>
  
        {ingredient == null ? (
          <h1 className='text-xl'>Select an Ingredient from the list to find meal ideas</h1>
        ) : mealList === null ? (
          <h1>Could not find any meal</h1>
        ) : (
          <div>
            <h1 className='text-xl'>Here are some meal ideas for {ingredient}</h1>
            <div className='py-4 space-y-2 grid grid-cols-1'>
                {mealList.map(meal => (
                <button className='font-semibold on hover:border-2 border-sky-700 rounded-lg' key={meal.idMeal}>{meal.strMeal}</button>
                ))}

            </div>
           
          </div>
        )}
      </div>
    )
  }
  
  
  
  
  