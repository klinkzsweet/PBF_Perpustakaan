import {React, useState} from "react";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex justify-center items-center">
      <div className="absolute w-60 h-60 rounded-xl bg-blue-900 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-blue-900 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-mono text-center mb-4 cursor-pointer">
            Create Account
          </h1>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email Addres"
            className="block text-sm font-mono py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            className="block text-sm font-mono py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="text"
            placeholder="Password Confirmation"
            className="block text-sm font-mono py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-6">
          <button className="py-3 w-64 text-xl text-white bg-blue-500 rounded-2xl">
            Create Account
          </button>
          <p className="mt-4 text-sm font-mono">
            Already Have An Account?{" "}
            
            <Link to="/">
            <span className="underline cursor-pointer"> Login</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="w-20 h-40 absolute bg-blue-100 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
};

export default Register;
