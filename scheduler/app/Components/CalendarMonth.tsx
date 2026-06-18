"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AddButtonSVG from '../Assets/AddButton.svg';

function CalendarMonth({...props}){
    const currentMonth = props.month;
    const [currentMonths, setCurrentMonths] = useState([]);

    return (
        <div className="calendarmonth-div">
            
        </div>
    )

}

export default CalendarMonth;