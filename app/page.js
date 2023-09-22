'use client'
import StudentInfo from './StudentInfo'
import Link from 'next/link'
import { motion} from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '@/app/animationData.json'


const links = [
  {
    folder:'week2',
    name:'Week 2'
  },
  {
    folder:'week3',
    name:'Week 3'
  }
]

const linkElement =  links.map(link=>(
  <Link href={`/${link.folder}`} className=' text-center w-2/4 text-xs py-1  px-2 border-2 border-slate-700 rounded-md hover:bg-green-700 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-600 '> 
  {link.name} </Link>

))

export default function Home() {
  return (
    <main className=' grid justify-center md:order-last lg:grid-cols-2  min-h-screen  align-center p-24 sm:grid-cols-1  '>

          <div className=''>
                  <Lottie  animationData={animationData}/>
          </div>
              
          <div 
            className='font-libre text-sm md:order-last '>

            <motion.h1 
             initial={{  xl:-300,opacity: 0, scale: 0.5 }}
             animate={{  x:0, opacity: 1, scale: 1 }}
            className='text-balance text-green-700 text-4xl font-bold mb-5 '>

            CPRG 306:<br/>Web Development 2 <br/> -Assignments

            </motion.h1>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.9 }}
                className='flex flex-col gap-7 column-1 '>

                  <StudentInfo/>
                  <div className='flex flex-col gap-1 column-1 '>
                      {linkElement}
                  </div>

            </motion.div>
           
            

          </div>
          
    </main>
  )
}
