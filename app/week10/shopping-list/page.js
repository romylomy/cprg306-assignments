"use client"
import React, { useState, useEffect } from 'react';
import Form from 'app/week6/form.js';
import List from './list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";
import {addUserItem, getItems,subscribeToItems } from "../_services/shopping-list-services";
import  { toast } from 'react-hot-toast';



export default function Page() {
  const { user } = useUserAuth();
 
    if (!user) {
      return null
    }
 

  const [mealList, setMealList] = useState([]);
  const [fetchMeal, setFetchMeal] = useState(false);
  const [ingredient, setIngredient] = useState(null);
  const [list, setList] = useState(null);
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

  const [formData, setFormData] = useState({ 
  name: '',
  quantity: 1,
  category: 'Produce',
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        console.log(user.uid);
        const items = await getItems(user.uid);
        const transformItems = items.map(item => ({
          id: item.id,
          category: item.newItem.category, 
          name: item.newItem.name,
          quantity: item.newItem.quantity,
        }));
  
        console.log("These are the items", transformItems);
        setList(transformItems); 
    
      } catch (error) {
        console.error('Error fetching items:', error);
      }
      
    }

    const handleUpdate = (updatedItem) =>{
      const newItem = updatedItem.map((item) =>({
        id: item.id,
        category: item.newItem.category, 
        name: item.newItem.name,
        quantity: item.newItem.quantity
      }
      ));
      setList(newItem);
    }

    const unsubscribe = subscribeToItems(user.uid, handleUpdate); 
    
    fetchItems();

    // Cleanup the listener when your component unmounts or as needed
    return () => unsubscribe();
  }, [mealList, user.uid]);

  

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

    addUserItem(user.uid, newItem);

    setList(prevlist => Array.isArray(prevlist) ? [newItem, ...prevlist] : [newItem]);

    setFormData({
      name: '',
      quantity: 1,
      category: 'Produce',
    });

    event.preventDefault();
    toast.success(`Added item: ${formData.name}\n quantity: ${formData.quantity}\n category: ${formData.category}`);
  }

  return (
    <div className='relative' >
        <div className='z-[999] w-full fixed top-0 left-1/2 -translate-x-1/2 bg-slate-50 bg-opacity-80 backdrop-blur-md   grid md:grid-cols-2 md:px-10 '>
            <div className='flex flex-col items-center py-10'>
                <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />

            </div>
            <MealIdeas className='order-1' mealList={mealList} ingredient={ingredient} />


        </div>
        <div className='absolute mt-[500px] w-screen'>
            <List list={list} setIngredient={setIngredient} />
        </div>
    

</div>
  );
}

 