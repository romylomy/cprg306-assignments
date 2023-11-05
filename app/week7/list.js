"use client"

import React, { useState, useEffect } from 'react';
import Item from './Item'; 
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion';

export default function List({list, setIngredient}) { 

  const [sortBy, setSortBy] = useState("name");
  const [buttonClick, setButtonClick] = useState(1);
  const [key, setKey] = useState(0);

  function CategorySort(){
      setSortBy("category")
      setButtonClick(() => setButtonClick(2))
  }

  function NameSort(){
    setSortBy("name")
    setButtonClick(() => setButtonClick(1))
  }

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [sortBy]);

  
  const sortedItemList = list.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  const isSortingByCategory = sortBy === "category";


  return (
    <main className=' py-10 lg:px-60 '>
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
     
      <div className="p-10 ">
       <AnimatePresence initial={false} animate={false} custom={key}>
          <motion.div
            initial={(isSortingByCategory && buttonClick == 2) ? { opacity: 1, x: 300 } : { opacity: 0, x: -300 }}
            animate={(isSortingByCategory && buttonClick == 2) ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            key={key} 
            className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'
          >
            {sortedItemList.map((item, index) => (
              <Item key={item.id} {...item} sortBy={sortBy} setIngredient={setIngredient} />
            ))}

          </motion.div>
        </AnimatePresence>
     </div>
     
          
     
    </main>
  );
}
