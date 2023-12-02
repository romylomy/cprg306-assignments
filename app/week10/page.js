"use client"
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Image from "next/image";
import { FaClipboardList } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdPlaylistAddCheckCircle } from "react-icons/md";


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
        <div className="min-h-screen flex flex-cols items-center justify-center relative ">
          <div className="grid grid-cols-1 gap-y-5 items-center">
            <h1 className="sm:text-2xl">Please log in to access the content.</h1>
            <div className="flex justify-center items-center gap-x-2 ">
              <button className="w-1/2 flex items-center border-2 border-slate-700 justify-around shadow-lg rounded-lg px-3 py-2 hover:bg-orange-400" onClick={handleLogin}>
                <FaGithub size={30}/> 
              </button>
              <button className="w-1/2 flex items-center border-2 border-slate-700 justify-around shadow-lg rounded-lg px-3 py-2 hover:bg-orange-400" onClick={handleLogin2}>
                <FaGoogle size={30}/> 
              </button>
            </div>
            <div>
              {/* Image component is not properly closed, fixing it below */}
              <Image 
                src="https://www.canva.com/design/DAF1WIJYhpY/view" 
                alt="Past" // Add alt text for accessibility
                height={50} 
                width={50} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
