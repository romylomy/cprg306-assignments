"use client"
import React, { useState } from 'react';
import ItemList from './ItemList'; 
import Item from './Item'; 
import { cn } from '@/lib/utils'



export default function Page() { 

  const [sortBy, setSortBy] = useState("name");
  const [buttonClick, setButtonClick] = useState(1);

  function CategorySort(){
      setSortBy("category")
      setButtonClick(() => setButtonClick(2))
  }

  function NameSort(){
    setSortBy("name")
    setButtonClick(() => setButtonClick(1))
  }

  
  const sortedItemList = ItemList.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <main className=' bg-slate-100 p-5 md:px-10 lg:px-60'>
      <div className="flex justify-center gap-x-2">
        <button onClick={NameSort} variant="outline"  className={ cn(
            "flex items-center gap-x-2 text-slate-500 px-2 text-lg font-[500] transition-all hover:text-slate-600 rounded-full hover:bg-slate-300/20 ",
            buttonClick == 1 && "text-sky-700   border-2 rounded-full shadow-lg  border-sky-700 bg-sky-200/20"
        )}>
          Name
        </button>
        <button onClick={CategorySort} variant="outline" className={ cn(
            "flex items-center gap-x-2 text-slate-500 px-2 text-lg font-[500] transition-all hover:text-slate-600 rounded-full hover:bg-slate-300/20 ",
            buttonClick == 2 && "text-sky-700  border-2 rounded-full shadow-lg  border-sky-700 bg-sky-200/20 hover:bg-sky-200/20 "
        )}>
          Category
        </button>

      </div>
     
      <div className="p-10  ">
        <div>
          <div className='grid grid-cols-1 gap-4'>
            {sortedItemList.map((item, index) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
