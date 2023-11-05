import React from 'react'


export default function Form({handleSubmit, handleChange, formData} ) {
       
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
    
 
    
  return (
        <form onSubmit={handleSubmit} className='absolute w-1/2 p-2 grid grid-cols-1 gap-4 rounded-md '>
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
                        quantity:
                        <input
                            className=' font-light border-2 bg-opacity-30 rounded-lg p-1'
                            type="number"
                            name='quantity'
                            min={1}
                            max={100}
                            required={true}
                            value={formData.quantity}
                            onChange={handleChange}
                        />

                    </label>
               

                </div>
                
                <div>
                    <label className=" font-semibold  text-slate-700 grid grid-cols-1 w-full'" >
                        Category:
                        <select 
                            onChange={handleChange} 
                            value={formData.category}
                            className=" font-light border-2 rounded-lg p-1"
                            name="category"
                                >
                                <option disabled>Select category</option>
                                {   
                                    categoryList.map((category, index)=>(
                                        <option key={index} 
                                                name={category} 
                                                value={category}
                                                >{category}
                                        </option>
                                        ))
                                }

                        </select>

                    </label>

                </div>
                
                
            </div>
            <div className=' pt-8 flex justify-end text-center'>
                <button className='backdrop-blur-md font-bold shadow-sm shadow-orange-700 rounded-lg p-4 bg-orange-400 text-orange-700 flex justify-end'>
                    Add
                
                </button>
            </div>
            
            
        
    </form>

    
  )
}
