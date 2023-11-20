"use client"
import React from "react";



export default function Item({ key, name, icon, quantity, category, setIngredient }) {
  
  
  const handleItemClick = () => {
  
    const stringName = name.toString();  
    let cleanedName = stringName
      .replace(/[^\x00-\x7F]/g, '') // Remove non-ASCII characters
      .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]/g, '') // Remove specific Unicode ranges
      .trim();

      if (cleanedName.charAt(cleanedName.length - 1) === 's') {
        cleanedName = cleanedName.substring(0, cleanedName.length - 1); // Trim the last 's'
      }
    
  
    console.log('After cleaning:', cleanedName);
  
    setIngredient(cleanedName);
    console.log('set');
  };
  
  return (
    <button onClick={handleItemClick} className="font-mono hover:bg-orange-400  shadow-sm rounded-lg text-slate-700 bg-slate-300 bg-opacity-50 hover:scale-105 ease-in-out duration-300">
        <div className="p-4">
            <p className="font-semibold">{category}</p>
            <p className="text-2xl">{icon}</p>
            <h2 className="text-xl">{name}</h2>
            <p >{`quantity:${quantity}`}</p>

        </div>
     
    </button>
  );
}
