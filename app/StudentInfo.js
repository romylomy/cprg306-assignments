import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { frame } from 'framer-motion';

const infos = [
  {
    Name: 'Jerome Corpuz',
    Section: 'CPRG 306 C',
    Github: 'https://github.com/romylomy'
  }
];

export default function StudentInfo() {
  return (
    <div className='p-2 text-slate-700 rounded-lg lg:text-xl lg:pb-10'>
      {infos.map((info, index) => (
        <div className='w-3/4 'key={index}>
          {Object.keys(info).map((key) => // map through each attribute and display attribute name with corresponding value
            key === 'Github' ? ( // if attribute is Github render icon and a tag 
              <div key={key} className='flex gap-2 items-center	'>
                < FaGithubAlt/>
                <a href={info[key]}>{info[key]}</a>
              </div>
            ) : (
              <div key={key} className='flex gap-2 '> 
                <p className='font-bold'>{`${key}:`}</p>
                <p>{info[key]}</p> 
              </div> 
            )
          )}
        </div>
      ))}

    </div>
  );
}
