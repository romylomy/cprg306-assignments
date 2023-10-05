import React, { useState } from 'react'


export default function Form() {
       
    const categoryList = [
        "Produce", 
        "Dairy", 
        "Bakery", 
        "Meat", 
        "Frozen Foods", 
        "Canned Goods", 
        "Dry Goods", 
        "Beverages", 
        "Snacks", 
        "Household", 
        "Other"
    ];
    
    const[formData, setFormData] = useState({
        name:'', 
        amount:1,
        category:'' 

    });

    function handleChange(event){
        const {value, name, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                prevFormData, 
                    [name]: type =="checkbox" ? checked : value
                       
            }
        })
    }
 
    
  return (
        <form className='  h-1/3 p-2 grid grid-cols-1 gap-4 rounded-md '>
            <input
                className="font-light border-2 rounded-lg p-2 w-full"
                type="text"
                name='name'
                placeholder='item name'
                required={true}
                value={formData.name}
                onChange={handleChange}
            />
            <div className='grid grid-cols-1'>
                <div>
                    <label className='font-semibold text-slate-700 grid grid-cols-1  '>
                        Amount:
                        <input
                            className=' font-light border-2 bg-opacity-30 rounded-lg p-1'
                            type="number"
                            name='amount'
                            placeholder='item name'
                            required={true}
                            value={formData.amount}
                            onChange={handleChange}
                        />

                    </label>
               

                </div>
                
                <div>
                    <label className=" font-semibold  text-slate-700 grid grid-cols-1 w-full'" >
                        Category:
                        <select className=" font-light border-2 rounded-lg p-1" value={formData.category} onChange={handleChange}>
                            <option disabled >category</option>
                            {   
                                categoryList.map((category, index)=>(
                                    <option name={category} value={category}>{category}</option>
                                ))
                            }

                        </select>

                    </label>

                </div>
                
                
            </div>
            <div className=' pt-8 flex justify-end text-center'>
                <button className='backdrop-blur-md font-bold shadow-sm shadow-orange-700 rounded-lg p-4 bg-orange-400 text-orange-700 flex justify-end'>
                    <h1>Add</h1>
                
                </button>
            </div>
            
            
        
    </form>

    
  )
}

 