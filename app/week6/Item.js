import React from "react";

export default function Item({ key, name, icon, quantity, category }) {
  return (
    <div className="font-mono shadow-sm rounded-lg text-slate-700 bg-slate-300 bg-opacity-50">
        <div className="p-4">
            <p className="font-semibold">{category}</p>
            <p className="text-2xl">{icon}</p>
            <h2 className="text-xl">{name}</h2>
            <p >{`quantity:${quantity}`}</p>

        </div>
     
    </div>
  );
}
