import React from 'react';
import {HiOutlineClipboardList} from 'react-icons/Hi'
import ItemList from './ItemList';
import Item from './Item'; // Update the import for 'Item' with the correct filename (case-sensitive).

export default function Page() { // Use PascalCase for the component name.

  return (
    <section className='p-5 md:px-10 lg:px-80'>
      <div className="p-10 shadow-lg bg-opacity-50 rounded-xl">
        <div className='bg-opacity-20  text-slate-700 bg-slate-300 shadow-lg p-4 rounded-lg my-10 flex align-center justify-center  '>
             <p className='font-raleway text-3xl lg:text-5xl py-4 text-bold'>{`${ItemList.length} items`}</p>
              <HiOutlineClipboardList size={70}/>

        </div>

        <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>

          <div className='bg-blue-700  bg-opacity-10 rounded-lg p-5'>
            <h1 className='text-bold pb-5 font-ubuntu text-slate-800 text-3xl'>Household</h1>
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

          <div className='bg-blue-700 bg-opacity-10 rounded-lg p-5'>
            <h1 className='text-bold pb-5  text-slate-800 text-3xl'>Produce</h1>
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

          <div className='bg-blue-700 bg-opacity-10 rounded-lg p-5'>
            <h1 className='text-bold pb-5  text-slate-800 text-3xl'>Meat</h1> 
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

          <div className='bg-blue-700 bg-opacity-10 rounded-lg p-5'>
            <h1 className='text-bold pb-5  text-slate-800 text-3xl'>Canned Food</h1> 
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

          <div className='bg-blue-700 bg-opacity-10 rounded-lg p-5'>
            <h1 className='text-bold pb-5  text-slate-800 text-3xl'>Dry goods</h1>
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
    </section>
  );
}
