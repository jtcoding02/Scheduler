"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import SignUp from '../Components/SignUp'
import TopNavBar from '../Components/TopNavBar'

function SignUpPage() {

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
        <div className="signuppage-div h-screen w-full bg-[#1532A8] flex flex-col overflow-auto">
            <div className = "topnavbar-div w-full flex-shrink-0">
                <TopNavBar />
            </div>
            <div className = "flex-1 w-full h-full flex flex-row">
                <div className="flex h-full w-full">
                    <SignUp/>
                </div>
            </div>
        </div>
        
    )
}

export default SignUpPage;