"use client"
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Image from "next/image";
import { FaClipboardList } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import {motion} from "framer-motion"
import MealMingle from 'public/MealMingle.json'
import Lottie from 'lottie-react'
import { TypeAnimation } from 'react-type-animation';




const Page = () => {
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogin2 = async () => {
    await googleSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="bg-slate-200">
      {user ? (
        <div className="min-h-screen flex flex-col items-center justify-center relative gap-y-5">
          <Image src={user.photoUrl} height={50} width={50}/>
          <div className="sm:text-2xl">
            <p>
              Welcome,  {user.displayName} 
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-3 sm:flex sm:justify-center sm:items-center gap-x-5">
            <button className="border-2 border-slate-700 shadow-lg rounded-lg px-3 py-2 hover:bg-orange-400"> 
              <a href="/week10/shopping-list">
                <FaClipboardList size={30} />
              </a>
            </button>
            <button className="border-2 border-slate-700 shadow-lg rounded-lg px-3 py-2 hover:bg-orange-400" onClick={handleLogout}>
              <IoLogOut size={30}/> 
            </button>
          </div>
        </div>
      ) : (
        <main className=' bg-gray-300 text-slate-50 flex lg:flex-cols items-center justify-center h-screen  '>
  

      
        
      
        <div className= ' relative grid grid-cols-1 justify-between w-full '>
          <div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
                >

              <Lottie className=' relative shadow-inner bg-slate-300 px-30 lg:px-80' animationData={MealMingle}>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  className=' z-[100]  bg-gray-100 bg-opacity-80 rounded-lg absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 justify-center items-center border-2 border-slate-700 p-5 '>
                  <div className=" w-full  p-5 sm:p-15  grid lg:grid lg:grid-cols-1   ">
                      
                      
                        
                      
                  <div className="grid grid-cols-1 ">

                        <h1 className="text-4xl text-slate-700">MealMingle</h1>
                        <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          
                          'Add item',
                          1000,
                          'find recipe',
                          1000,
                          'Cook',
                          1000,
                          
                        
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        className=' text-2xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-orange-500'
                        repeat={Infinity}
                        />

                  
                        <h1 className="mt-4 line-height-[4px] text-md text-slate-700 ">Create account / login </h1>

                              <div className=" flex justify-center items-center gap-y-1 gap-x-2 ">

                                <button className="w-1/2 flex items-center bg-slate-500 border-2 border-slate-700 justify-around shadow-lg rounded-full px-3 py-2 hover:bg-red-500" onClick={handleLogin}>
                                  <FaGithub size={30}/> 
                                </button>
                                <button className="w-1/2 flex items-center  bg-slate-500 border-2 border-slate-700 justify-around shadow-lg rounded-full px-3 py-2 hover:bg-red-500" onClick={handleLogin2}>
                                  <FaGoogle size={30}/> 
                                </button>
                              </div>
                            </div>
                  
                        
                      </div>
                      
                    </motion.div>

              </Lottie>
 

            </motion.div>
              
             
          
              
      

          </div>
          
          
          
        </div>

     
    
  
    </main>
        
      )}
    </div>
  );
};

export default Page;
