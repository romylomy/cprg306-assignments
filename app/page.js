'use client'
import StudentInfo from './StudentInfo'
import Link from 'next/link'
import { motion} from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '@/app/animationData.json'


const links = [
  {
    folder:'week3',
    name:'Week 3'
  },
  {
    folder:'week4',
    name:'Week 4'
  },
  {
    folder:'week5',
    name:'Week 5'
  }
]

const linkElement =  links.map(link=>(
  <Link href={`/${link.folder}`} className=' text-center w-1/2 z-[2] p-5 shadow-xl text-sm lg:text-lg py-1 bg-slate-700 bg-opacity-80  px-2 border-2 border-slate-700 border-opacity-50 rounded-md  hover:bg-slate-300 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-700 '> 
  {link.name} </Link>

))

export default function Home() {
  return (
    <main className=' bg-slate-50 lg:bg-slate-50 text-slate-50 flex lg:flex-cols items-center justify-center h-screen  '>
  

      
        
      
        <div className='grid grid-cols-1 justify-between w-full '>
          <div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}>

              <Lottie className='shadow-inner bg-slate-300 px-30 lg:px-80' animationData={animationData}/>
 

            </motion.div>
              
             
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className='mx-10 md:mx-20 '>
              <div className=" py-5   grid lg:flex lg:justify-around lg:items-center   ">
                  <h1
                      className='lg:text-center font-OpenSans rounded-lg  text-blue-700 lg:bg-none  text-balance  bg-opacity-70  shadow-orange-700  text-4xl font-bold mb-5 lg:text-5xl'>
              
                      CPRG 306:<br />
              
                </h1>
                <h1
                      className='lg:text-center font-OpenSans rounded-lg  text-blue-800 lg:bg-none  text-balance  bg-opacity-70  shadow-orange-700  text-3xl font-bold mb-5 lg:text-4xl'>
              
                       Web Development 2 <br/> Assignments
              
                </h1>
                <StudentInfo />
                
              </div>
              <div className=' grid grid-cols-1 items-center gap-1 lg:flex lg:justify-between '>
                  
                  {linkElement}
              </div>
          </motion.div>
          
              
      

          </div>
          
          
          
        </div>

     
    
  
    </main>
  )
  }  