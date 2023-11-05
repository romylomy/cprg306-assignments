"use client"
import {useState, useEffect } from 'react'



export default function MealIdeas({ mealList, ingredient }) {
    console.log(mealList);
  
    return (
      <div className='  text-center md:text-left md:p-10 md:w-1/2   '>
        <h1 className='text-3xl'>Meal ideas</h1>
  
        {ingredient == null ? (
          <h1 className='text-xl'>Select an Ingredient from the list to find meal ideas</h1>
        ) : mealList === null ? (
          <h1>Could not find any meal</h1>
        ) : (
          <div>
            <h1 className='text-xl'>Here are some meal ideas for {ingredient}</h1>
            <div className='py-4'>
                {mealList.map(meal => (
                <p className='font-semibold' key={meal.idMeal}>{meal.strMeal}</p>
                ))}

            </div>
           
          </div>
        )}
      </div>
    )
  }
  
  
  
  
  