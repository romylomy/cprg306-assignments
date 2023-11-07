"use client"
import React from "react";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <div className="">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Logout</button>
          <a href="/week8/shopping-list">Go to Shopping List</a>
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
