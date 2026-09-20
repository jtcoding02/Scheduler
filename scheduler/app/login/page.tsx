"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import Login from '../Components/Login'
import TopNavBar from '../Components/TopNavBar'

function LoginPage() {

    return (
        <div className="signuppage-div h-screen w-full bg-[#1532A8] flex flex-col overflow-auto">
            <div className = "topnavbar-div w-full flex-shrink-0">
                <TopNavBar />
            </div>
            <div className = "flex-1 w-full h-full flex flex-row">
                <div className="flex h-full w-full">
                    <Login/>
                </div>
            </div>
        </div>
        
    )
}

export default LoginPage;