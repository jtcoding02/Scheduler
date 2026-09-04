"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import LoginModal from './Components/LoginModal';

function LoginPage(){
    return(
        <div className='login-page-div w-full h-full flex'>
            <div className='login-page-bg bg-[#1532A8] flex w-full h-full'>
                <LoginModal />
            </div>
        </div>
    )
}

export default LoginPage;