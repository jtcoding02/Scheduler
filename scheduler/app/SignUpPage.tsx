"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';

function SignUpPage() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [warning, setWarning] = useState('');

    const handleClear = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPwd('');
    }

    //if name not entered, instead of Hello Name, can be Hello User

    const handleSignUp = () => {
        if(!firstName || !email || !password || !confirmPwd){
            alert('Please fill out at least the First Name, Email, Password and Confirm Password fields.'
            )
            setWarning('Please fill out at least the First Name, Email, Password and Confirm Password fields.')
            return;
        }

         setWarning('');
    }

    return (
        <div className="w-full flex h-full">
            <div className = "flex w-full h-full bg-[#1532A8]">
                <div>
                    <div className="bg-white flex modal-bg-card">
                        <div className="title-section-div flex">
                            <section className="title-section flex">
                                <div className="">
                                    <p className="">Create An Account</p>
                                </div>
                                <div>
                                    <p className="">
                                        <span className="">Sign Up</span> with your details
                                    </p>
                                </div>
                            </section>
                            
                        </div>
                        <div>
                            <form onSubmit={handleSignUp} className="modal-content-div flex flex-col gap-4 py-4">
                                {/* Title */}
                                <div className="flex flex-col gap-1">
                                    <div className="">
                                        <label className="modal-title font-semibold text-sm text-gray-700">
                                        Title
                                        <span className="text-red-700">
                                            *
                                        </span>
                                        </label>               
                                    </div>
                                    
                                    <div className="">
                                        <input 
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full modal-field"
                                        
                                        placeholder="Enter title here..."
                                        />
                                    </div>
                                    
                                </div>

                                {/* Start Time Section */}
                                <div className="flex flex-col gap-1">
                                    <label className="modal-title font-semibold text-sm text-gray-700">
                                        Start Time
                                        <span className="text-red-700">
                                            *
                                        </span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input 
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="modal-field flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                                        />
                                        <input 
                                            type="time"
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                            className="modal-field flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                                        />

                                        {/* <TimePicker
                                            label="Start Time"
                                            value={startTime}
                                            views={['hours', 'minutes']}
                                            onChange={(e) => setStartTime(e.target.value)}
                                        /> */}
                                    </div>
                                </div>

                                {/* End Time Section */}
                                <div className="flex flex-col gap-1">
                                    <label className="modal-title font-semibold text-sm text-gray-700">
                                        End Time
                                        <span className="text-red-700">
                                            *
                                        </span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input 
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="modal-field flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                                        />
                                        <input 
                                            type="time"
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                            className="modal-field flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                                        />
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-1">
                                    <label className="modal-title font-semibold text-sm text-gray-700 pb-1">Description (Optional)</label>
                                    <textarea 
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="modal-field w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8] min-h-[4rem] resize-y"
                                        placeholder="Write a description here if needed..."
                                    />
                                </div>

                                {/* Submission Action Grid */}
                                <div className="w-full flex justify-end gap-3 pt-4 ">
                                    <div className="w-full flex">
                                        <button 
                                        type="submit"
                                        className="w-full px-5 py-2.5 rounded-lg bg-[#1532A8] hover:bg-[#2546c4] text-white transition-all font-bold text-sm shadow-md"
                                    >
                                        CREATE
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
            </div>
        </div>
        
    )
}