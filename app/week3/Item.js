import React from "react";

export default function Item({ name, icon, quantity }) {
  return (
    <div className=" my-5 shadow-lg rounded-lg text-slate-700 bg-slate-200 bg-opacity-50">
        <div className="p-2">
            <p>{icon}</p>
            <h2>{name}</h2>
            <p>{`quantity: ${quantity}`}</p>

        </div>
     
    </div>
  );
}
