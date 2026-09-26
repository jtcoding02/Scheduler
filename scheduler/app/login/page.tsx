"use client"; 
import React, {Component, FormEvent, SubmitEvent, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import Login from '../Components/Login'
import TopNavBar from '../Components/TopNavBar'
import { useRouter } from 'next/router'

function LoginPage() {

    const router = useRouter() 

    //event: FormEvent<HTMLFormElement>
    async function handleLogin(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
    
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
    
        const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        })
    
        if (response.ok) {
            //router.push('/profile')
            router.push('/')
        } else {
        // Handle errors
        }
    }

    return (
        <div className="signuppage-div h-screen w-full bg-[#1532A8] flex flex-col overflow-auto">
            <div className = "topnavbar-div w-full flex-shrink-0">
                <TopNavBar />
            </div>
            <div className = "flex-                                               1 w-full h-full flex flex-row">
                <div className="flex h-full w-full">
                    <Login/>
                </div>
            </div>
        </div>
        
    )
}

export default LoginPage;