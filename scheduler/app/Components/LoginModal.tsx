"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';

const LoginModal = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClear = () => {
        setEmail('');
        setPassword('')
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Validate mandatory fields
        if (!email || !password) {
            alert('Please fill out your Email and Password.');
            return;
        }
    }

    return(
        <div className="modal-div flex flex-col min-w-[35rem] p-6 bg-white text-black text-left">
            <div className="modal-header-div flex justify-between items-center pb-4 border-b border-gray-200">
                <div className="modal-title-div">
                    <p className="text-2xl font-bold text-black">
                        Welcome Back!
                    </p>
                </div>

                <div className='modal-title-div'>
                    <p className='text-xl font-bold text-black'>
                        <span className='text-[#1532A8]'>
                            Login 
                        </span>
                        with your email and password.
                    </p>
                </div>
                
            </div>

            {/* Form Fields Container */}
            <form onSubmit={handleLogin} className="modal-content-div flex flex-col gap-4 py-4">
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

                
                {/* Password: NOTE, Need to edit to password field and add security */}
                <div className="flex flex-col gap-1">
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
                        
                        placeholder="Enter password here..."
                        />
                    </div>
                    
                </div>
               

                {/* Submission Action Grid */}
                <div className="w-full flex justify-end gap-3 pt-4 ">
                    <div className="w-full flex">
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

            {/* Sign Up Prompt */}
            <div className=''>
                <div className=''>
                    <p className=''>Don't have an account? </p>
                </div>
                <div>
                    <button>
                        Sign Up
                    </button>
                </div>
            </div>

            

            {/* <div className = "modal-content-div">
                <div className="title-field-div modal-field-div">
                    <div className="title-label-div modal-label-div">
                        <p className = "title-label modal-label">
                            Title
                        </p>
                    </div>
                    <div className="title-field-div modal-field-div">
                        <input className = "field-input modal-input"/>
                    </div>
                </div>

                <div className="start-duration-div">
                    <div className="start-title-div modal-label-div">
                        <p className = "start-title-txt modal-label">
                            Start Time

                        </p>
                    </div>
                    
                    <div className="start-fields-div">
                        <div className="start-date-div">
                            <input className = "start-date-input date-input duration-input"/>
                        </div>

                        <div className="start-time-div">
                            <input className = "start-time-input time-input duration-input"/>
                        </div>
                    </div>

                    
                </div>

                <div className="end-duration-div">
                     <div className="end-title-div modal-label-div">
                        <p className = "end-title-txt modal-label">
                            End Time
                        </p>
                    </div>
                    
                    <div className="end-fields-div">
                        <div className="end-date-div">
                            <input className = "end-date-input date-input duration-input"/>
                        </div>

                        <div className="end-time-div">
                            <input className = "end-time-input time-input duration-input"/>
                        </div>
                    </div>


                    
                </div>

                <div className="description-div">
                    <div className="desc-title-div modal-label-div">
                        <p className = "desc-title modal-label"></p>
                    </div>
                    <div className="desc-field-div modal-input-div">
                        <input className = "desc-field modal-input"/>
                    </div>
                </div>

                
            </div>
            <div className = "modal-buttons-div">
                <div className="create-btn-div modal-btn-div">
                    <button className="create-btn modal-button">
                        <div className="create-txt-div modal-btn-txt-div">
                            <p className = "create-btn-txt">
                                CREATE
                            </p>
                        </div>
                    </button>
                </div>

                <div className="clear-btn-div">
                    <button className="clear-btn modal-button">
                        <div className="clear-txt-div">
                            <p className = "clear-txt">CLEAR</p>
                        </div>
                    </button>
                </div>
            </div> */}
        </div>
        
    )
}

export default LoginModal;