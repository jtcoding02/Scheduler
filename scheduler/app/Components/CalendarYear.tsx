"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AddButtonSVG from '../Assets/AddButton.svg';

function CalendarYear({...props}){
    const currentYear = props.year;
    const [currentYears, setCurrentYears] = useState([]);

    return (
        <div className="calendaryear-div">
            
        </div>
    )

}

export default CalendarYear;