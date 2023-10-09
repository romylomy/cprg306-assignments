import React from 'react';
import ItemList from './ItemList';
import Item from './Item'; // Update the import for 'Item' with the correct filename (case-sensitive).

export default function Page() { // Use PascalCase for the component name.

  return (
    <main className=' bg-slate-100 p-5 md:px-10 lg:px-60'>
      <div className="p-10  ">
        <div className=' p-4 shadow-lg rounded-lg my-10 flex align-center justify-center  '>
             <p className='font-bebas text-3xl lg:text-5xl py-4 text-bold'>{`${ItemList.length} items`}</p>

        </div>

        <div className='grid gap- grid-cols-1 md:grid-cols-2'>

          <div className=' shadow-lg border-2 border-slate-200 bg-opacity-10 rounded-lg p-5 '>
            <div className='mb-5 text-center rounded-lg bg-opacity-50 bg-purple-300 '>
              <h1 className='font-lora text-bold text-purple-700 font-ubuntu  text-3xl'>Household</h1>
            </div>
            
            <div className='grid grid-cols-1 gap-4'>
              {ItemList.map((item, index) => {
                if (item.category === 'household') {
                  return (
                    <Item key={index} {...item} />
                  );
                }
                return null; 
              })}
            </div>
          </div>

          <div className='shadow-lg border-2 border-slate-200 bg-opacity-10 rounded-lg p-5'>
          <div className='mb-5 text-center rounded-lg bg-opacity-50 bg-green-300 '>
              <h1 className='font-lora text-bold text-green-700 font-ubuntu  text-3xl'>Produce</h1>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              {ItemList.map((item, index) => {
                if (item.category === 'produce') {
                  return (
                    <Item key={index} {...item} />
                  );
                }
                return null;
              })}
            </div>
          </div>

          <div className='shadow-lg border-2 border-slate-200 bg-opacity-10 rounded-lg p-5'>
            <div className='mb-5 text-center rounded-lg bg-opacity-50 bg-orange-300 '>
                <h1 className='font-lora text-bold text-orange-700 font-ubuntu  text-3xl'>Meat</h1>
              </div>
            <div className='grid grid-cols-1 gap-4'>
              {ItemList.map((item, index) => {
                if (item.category === 'meat') {
                  return (
                    <Item key={index} {...item} />
                  );
                }
                return null;
              })}
            </div>
          </div>

          <div className='shadow-lg border-2 border-slate-200 bg-opacity-10 rounded-lg p-5'>
            <div className='mb-5 text-center rounded-lg bg-opacity-50 bg-yellow-300 '>
                  <h1 className='font-lora text-bold text-yellow-700 font-ubuntu  text-3xl'>Canned Goods</h1>
                </div>
            <div className='grid grid-cols-1 gap-4'>
              {ItemList.map((item, index) => {
                if (item.category === 'canned goods') {
                  return (
                    <Item key={index} {...item} />
                  );
                }
                return null;
              })}
            </div>
          </div>

          <div className='shadow-lg border-2 border-slate-200 bg-opacity-10 rounded-lg p-5'>
            <div className='mb-5 text-center rounded-lg bg-opacity-50 bg-blue-300 '>
                  <h1 className='font-lora text-bold text-blue-700 font-ubuntu  text-3xl'>Dry Goods</h1>
                </div>
              <div className='grid grid-cols-1 gap-4'>
                {ItemList.map((item, index) => {
                  if (item.category === 'dry goods') {
                    return (
                      <Item key={index} {...item} />
                    );
                  }
                  return null;
                })}
              </div>
          </div>


        </div>
      </div>
    </main>
  );
}
