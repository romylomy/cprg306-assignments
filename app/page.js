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
]

const linkElement =  links.map(link=>(
  <Link href={`/${link.folder}`} className=' text-center w-1/2 z-[2] p-5 shadow-xl text-sm lg:text-lg py-1 bg-slate-700 bg-opacity-80  px-2 border-2 border-slate-700 border-opacity-50 rounded-md  hover:bg-slate-300 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-700 '> 
  {link.name} </Link>

))

export default function Home() {
  return (
    <main className='bg-slate-100 bg-opacity-90 text-slate-50 flex lg:flex-cols items-center justify-center h-screen  '>
  

      
        
      
        <div className='grid grid-cols-1 justify-between w-full '>
          <div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}>

              <Lottie className=' px-30 lg:px-80' animationData={animationData}/>


            </motion.div>
              
             
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className=' mx-10 md:mx-20 '>
              <div className=" p-5 bg-slate-300 backdrop-blur-md rounded-lg border-2 shadow-lg grid lg:flex lg:justify-around lg:items-center   ">
                  <h1
                      className='p-2 lg:text-center  rounded-lg text-blue-700 opacity-50 text-balance  bg-opacity-70  shadow-orange-700  text-xl font-bold mb-5 lg:text-4xl'>
              
                      CPRG 306:<br />Web Development 2 <br/> Assignments
              
                </h1>
                <StudentInfo />
                
              </div>
              <div className='py-10 grid grid-cols-1 items-center gap-1 lg:flex lg:justify-between '>
                  
                  {linkElement}
              </div>
          </motion.div>
          
              
      

          </div>
          
          
          
        </div>

     
    
  
    </main>
  )
  }  