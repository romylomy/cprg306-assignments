"use client"
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Image from "next/image";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div >
      {user ? (
        <div className="min-h-screen flex flex-col items-center justify-center relative gap-y-5">

          <Image src={user.photoUrl} height={50} width={50}/>
          <div className="sm:text-2xl">
            <p>
              Welcome,  {user.displayName} 
            </p>
          </div>
         
         <div className=" grid grid-cols-1 gap-y-3 sm:flex sm:justify-center sm:items-center gap-x-5">
          <button className="shadow-lg rounded-lg px-3 py-2 hover:bg-orange-400"> <a href="/week10/shopping-list">Shopping List</a></button>
          <button className="shadow-lg rounded-lg px-3 py-2 hover:bg-orange-400" onClick={handleLogout}>Logout</button>
         </div>
       
        </div>
      ) : (
        <div >
          <p>Please log in to access the content.</p>
          <button onClick={handleLogin}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default Page;
