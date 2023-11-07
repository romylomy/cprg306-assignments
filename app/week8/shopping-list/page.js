"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import the router for navigation
import Form from 'app/week6/form.js';
import ItemList from 'app/week5/ItemList.js';
import List from './list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";



export default function Page() {
  const { user } = useUserAuth();
 
    if (!user) {
      return null
    }
 

  const [mealList, setMealList] = useState([]);
  const [fetchMeal, setFetchMeal] = useState(false);
  const [ingredient, setIngredient] = useState(null);
  let data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        data = await res.json();
        console.log(data);
        setMealList(data.meals);
        console.log(mealList);
        setFetchMeal(prev => !prev);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ingredient]);

  const formData = {
    name: '',
    quantity: 1,
    category: 'Produce'
  };

  const [list, setList] = useState(ItemList);

  function handleChange(event) {
    const { value, name, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(event) {
    const newItem = {
      name: formData.name,
      quantity: formData.quantity,
      category: formData.category,
    };

    setList(prevlist => [newItem, ...prevlist]);

    setFormData({
      name: '',
      quantity: 1,
      category: 'Produce',
    });

    event.preventDefault();
    window.alert(`Added item: ${formData.name}, quantity: ${formData.quantity}, category: ${formData.category}`);
  }

  return (
    <div className='relative' >
        <div className='z-[999] w-full fixed top-0 left-1/2 -translate-x-1/2 bg-slate-50 bg-opacity-80 backdrop-blur-md   grid md:grid-cols-2 md:px-10 '>
            <div className='flex flex-col items-center py-10'>
                <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />

            </div>
            <MealIdeas className='order-1' mealList={mealList} ingredient={ingredient} />


        </div>
        <div className='absolute mt-[500px]'>
            <List list={list} setIngredient={setIngredient} />
        </div>
    




</div>
  );
}

 