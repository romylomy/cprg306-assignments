'use client'
import StudentInfo from './StudentInfo'
import Link from 'next/link'
import { motion} from 'framer-motion'

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
  <Link href={`/${link.folder}`} className=' text-center w-2/4 text-xs py-1 font-bold px-2 border-2 border-slate-700 rounded-md hover:bg-emerald-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-600 '> 
  {link.name} </Link>

))

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-between p-24'>
          <div 
            className='font-libre text-sm '>

            <motion.h1 
             initial={{  opacity: 0, scale: 0.5 }}
             animate={{  opacity: 1, scale: 1 }}
            className='text-balance text-lime-800 text-4xl font-bold mb-5 '>

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
