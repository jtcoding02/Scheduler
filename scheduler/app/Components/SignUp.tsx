"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';

const SignUp = () =>  {

    const [name, setName] = useState('User');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [warning, setWarning] = useState('');

    const handleClear = () => {
        setName('User');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPwd('');
    }

    //if name not entered, instead of Hello Name, can be Hello User

    const handleSignUp = () => {
        if(!email || !password || !confirmPwd){
            alert('Please fill out at least the Email, Password and Confirm Password fields.'
            )
            setWarning('Please fill out at least the Email, Password and Confirm Password fields.')
            return;
        }

        if(password !== confirmPwd){
            setWarning('Please make sure that the password fields match.')
        }

        alert('Submitted!');

        setWarning('');
        handleClear();
    }

    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 p-4">
                <div className="title-section-div flex">
                    <section className="title-section flex flex-col">
                        <div className="text-2xl font-bold text-black">
                            <p className="">Create An Account</p>
                        </div>
                        <div className="">
                            <p className="text-xl font-semibold text-black">
                                <span className="">Sign Up</span> with your details
                            </p>
                        </div>
                    </section>
                    
                </div>
                <div className="">
                    <form onSubmit={handleSignUp} className="modal-content-div flex flex-col gap-4 py-4">
                        
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

                        {/* Name */}
                        <div className="flex flex-col gap-1">
                            <div className="">
                                <label className="modal-title font-semibold text-sm text-gray-700">
                                Name 
                                <span className="text-black">
                                    (Optional)
                                </span>
                                </label>               
                            </div>
                            
                            <div className="">
                                <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full modal-field"
                                
                                placeholder="Enter name here..."
                                />
                            </div>
                            
                        </div>

                        

                        {/* Password and Confirm Password */}
                        <div className="flex password-fields flex-col">
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
                                    
                                    placeholder="Enter title here..."
                                    />
                                </div>
                            
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="">
                                    <label className="modal-title font-semibold text-sm text-gray-700">
                                    Confirm Password
                                    <span className="text-red-700">
                                        *
                                    </span>
                                    </label>               
                                </div>
                                
                                <div className="">
                                    <input 
                                    type="text"
                                    value={confirmPwd}
                                    onChange={(e) => setConfirmPwd(e.target.value)}
                                    className="w-full modal-field"
                                    
                                    placeholder="Enter title here..."
                                    />
                                </div>
                            
                            </div>
                        </div>
                        

                        

                        {/* Submission Action Grid */}
                        <div className="w-full flex justify-end gap-3 pt-4 ">
                            <div className="w-full flex">
                                <button 
                                type="submit"
                                className="w-full px-5 py-2.5 rounded-lg bg-[#1532A8] hover:bg-[#2546c4] text-white transition-all font-bold text-sm shadow-md"
                            >
                                SIGNUP
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
                </div>
            </div>
        </div>
        
    )
}

export default SignUp;