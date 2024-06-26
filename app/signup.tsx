import React from "react";
import Head from "next/head";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline, MdPersonOutline } from "react-icons/md";

 function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-500">AURES</span>Company
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">
                Create an Account
              </h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <p className="text-gray-400 my-3">
                or use your email for registration
              </p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdPersonOutline className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdPersonOutline className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="prenom"
                    placeholder="Prénom"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <a
                  href="#"
                  className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
                >
                  Register
                </a>
              </div>
            </div>
          </div>

          <div className="w-2/3 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              To keep connected with us please login with your personal info.
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
            >
              Sign In
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Signup;
