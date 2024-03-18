"use client";
import React from "react";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
  // Use the useUserAuth hook to get user authentication state and functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const signIn = async () => {
    await gitHubSignIn();
  };

  // Sign out of Firebase
  const signOut = async () => {
    await firebaseSignOut();
  };

  // Display some of the user's information
  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={signOut}>Sign Out</button>
          <div>
            <a href="/week-8/shopping-list">Continue to your Shopping List</a>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
          <button onClick={signIn}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
}
