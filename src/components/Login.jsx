import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom'; // If using React Router, use this for navigation

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle signup logic here
    console.log('Signup:', email, password);
  };

  const handleGoogleSignup = () => {
    // Handle Google sign-up logic here
    console.log('Google sign-up initiated');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-[350px] md:w-[60vw] p-6">
        <div className="mb-4 flex flex-col gap-1">
          <h2 className="text-3xl font-bold text-center font-oswald">Great to hear that</h2>
          <p className="text-sm text-gray-600 text-center">But we need tp Sign you up First.</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className="space-y-8">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#f8b31d] focus:ring-1 focus:ring-[#f8b31d]"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#f8b31d] focus:ring-1 focus:ring-[#f8b31d]"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#f8b31d] focus:ring-1 focus:ring-[#f8b31d]"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-[#f8b31d] p-2 border-2 border-black text-xl rounded-md font-oswald"
          >
            Sign Up
          </button>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center border border-black py-2 rounded-md hover:bg-gray-100 transition duration-300"
        >
          <FcGoogle className="mr-2 h-5 w-5" />
          Sign up with Google
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
