import React from 'react'
import ItemList from './ItemList'
import Item from './item'

export default function page() {


  return (
    <section className='p-20'>
      <div class="flex align-center px-20 pt-20 bg-slate-700 bg-opacity-70 rounded-xl">
          <h1>{`You have ${ItemList.length} items in your list`}</h1> 
          <div className='bg-slate-700 bg-opacity-30 p-10 rounded-lg'> 
            <h1 className='text-bold text-3xl'>Household</h1>
            <div className='pt-10 border-slate-300'>
                {ItemList.map((item, index) => {
                  if(item.category=='household'){
                    return (
                        <Item key={index} {...item}> </Item>
                      )
                    }
                })}

            </div>
           
          </div>
        
      </div>
        
    </section>
  )
}
