"use client"
import React, { useState } from 'react'
import Form from 'app/week6/form.js'
import ItemList from 'app/week5/ItemList.js'
import List from './list';

export default function Page() {
       
    const[formData, setFormData] = useState({
       name:'', 
       quantity:1,
       category:'Produce' 

    });

    const [list, setList] = useState(ItemList)


    function handleChange(event){
        const {value, name, type, checked } = event.target
        setFormData((prevFormData) => ({
             
                ...prevFormData, 
                    [name]: type =="checkbox" ? checked : value
                       
            
        }))
    }

    function handleSubmit(event){

        const newItem = {
            name: formData.name,
            quantity: formData.quantity,
            category: formData.category,
          };

        setList(prevlist => [newItem,...prevlist ])



        event.preventDefault();
        window.alert(`Added item:${formData.name}, quantity:${formData.quantity}, category:${formData.category}`); 
        
    }
 
    
  return (

    
    <div className='py-5 flex flex-wrap  justify-center'>
       <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
       <List list={list}/>

    </div>

     
    
  )
}

 