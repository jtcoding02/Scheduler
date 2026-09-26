"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Login = () =>  {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');

    const handleClear = () => {
        setEmail('');
        setPassword('');
    }

    //if name not entered, instead of Hello Name, can be Hello User

    const handleLogin = () => {
        if(!email || !password){
            alert('Please fill out all fields.'
            )
            setWarning('Please fill out all fields.')
            return;
        }

        alert('Submitted!');

        setWarning('');
        handleClear();
    }

    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 p-8">
                <div className="title-section-div flex">
                    <section className="title-section flex flex-col">
                        <div className="flex">
                            {/* <div className="detail-header-left flex items-center gap-4">
                                <button onClick={} className="size-10 flex justify-center items-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-md">
                                    <ArrowBackIosIcon className="size-5" />
                                </button>
                               
                            </div> */}
                            <div className="text-2xl font-bold text-black pb-4 pl-4">
                                <p className="">Welcome Back!</p>
                            </div>
                        </div>
                        
                        <div className="">
                            <p className="text-xl font-semibold text-black">
                                <span className="text-[#1532A8]">Login</span> with your email and password.
                            </p>
                        </div>
                    </section>
                    
                </div>
                <div className="text-lg">
                    <form onSubmit={handleLogin} className="modal-content-div flex flex-col gap-4 py-4 text-lg">
                        
                        {/* First and Last Name Section */}
                        {/* <div className="flex flex-col gap-1">
                            
                            <div className="flex gap-2">
                                <div>
                                    <label className="modal-title font-semibold text-sm text-gray-700">
                                        First Name
                                        <span className="text-red-700">
                                            
                                        </span>
                                    </label>
                                    <input 
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="modal-field flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                                    />
                                </div>
                                
                                <div>
                                    <label className="modal-title font-semibold text-sm text-gray-700">
                                        Last Name
                                        <span className="text-red-700">
                                            
                                        </span>
                                    </label>
                                    <input 
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="modal-field flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                                    />
                                </div>

                            </div>
                        </div> */}
                        
                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <div className="">
                                <label className="modal-title font-semibold text-sm text-gray-700">
                                Email
                                <span className="text-red-700">
                                    *
                                </span>
                                </label>               
                            </div>
                            
                            <div className="">
                                <input 
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full modal-field"
                                
                                placeholder="Enter email here..."
                                />
                            </div>
                            
                        </div>

        
                        {/* Password and Confirm Password */}
                        <div className="flex password-fields flex-col">
                            <div className="flex flex-col gap-1 pb-4">
                                <div className="">
                                    <label className="modal-title font-semibold text-sm text-gray-700">
                                    Password
                                    <span className="text-red-700">
                                        *
                                    </span>
                                    </label>               
                                </div>
                                
                                <div className="">
                                    <input 
                                    type="text"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full modal-field"
                                    
                                    placeholder="Enter title here..."
                                    />
                                </div>
                            
                            </div>

                        </div>
                        

                        

                        {/* Submission Action Grid */}
                        <div className="w-full flex flex-col justify-end gap-3 pt-4 ">
                            <div className="w-full flex pb-4">
                                <button 
                                type="submit"
                                className="w-full px-5 py-2.5 rounded-lg bg-[#1532A8] hover:bg-[#2546c4] text-white transition-all font-bold text-sm shadow-md"
                            >
                                LOGIN
                                </button>
                            </div>
                            <div className="flex w-full">
                                <button 
                                type="button"
                                onClick={handleClear}
                                className="w-full px-5 py-2.5 rounded-lg border-4 border-[#1532A8] text-[#1532A8] hover:bg-gray-100 transition-all font-semibold text-sm"
                            >
                                CLEAR
                                </button>
                            </div>
                            
                            
                        </div>
                    </form>

                    <div className="signup-link-div pt-4">
                        <p>Don't have an account? <div>
                            <button className="font-semibold ">
                                Sign Up
                            </button>
                            </div>
                        </p>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Login;