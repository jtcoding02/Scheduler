"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AddButtonSVG from '../Assets/AddButton.svg';

//I think this is to fill up the actual calendar...
//Not dropdown

function CalendarData({...props}){
    const dayOfMonth = new Date(props.date.getFullYear(), props.date.getMonth(), 1);
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(dayOfMonth);
    const titleDay = dayOfMonth.getDay();
    const currentDaysArray = [];
    const [currentDays, setCurrentDays] = useState([]);

    //day representing the first section
    //each calendar for month year has 42 sections
    //00 01 02 03 04 05 06
    //07 08 09 10 11 12 13
    //14 15 16 17 18 19 20
    //21 22 23 24 25 26 27
    //28 29 30 31 32 33 34
    //35 36 37 38 39 40 41
    const [newDay, setNewDay] = useState<number>(dayOfMonth.getDate());

    for(let day = 0; day < 42; day++){
        
        //for example: day = 0, title  = sunday
        //if day is first day and day is sunday
        if(day === 0 && titleDay === 0){
            setNewDay(dayOfMonth.getDate() - 7);
            dayOfMonth.setDate(newDay);
        }
        //if day is first and day is not sunday
        else if (day === 0){
            setNewDay(dayOfMonth.getDate() + (day - titleDay));
            dayOfMonth.setDate(newDay);
            //dayOfMonth.setDate();
        }
        else{
            setNewDay(dayOfMonth.getDate() + 1);
            dayOfMonth.setDate(newDay);
            //dayOfMonth.setDate(dayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (dayOfMonth.getMonth() === props.day.getMonth()),
            date: (new Date(dayOfMonth)),
            month: (dayOfMonth.getMonth()),
            dateDay: dayOfMonth.getDate(),
            selected: (dayOfMonth.toDateString() === props.day.toDateString()),
            year: dayOfMonth.getFullYear()
        }

        currentDaysArray.push(calendarDay);
    }

    return (
        <div className="calendarday-div">
            {
                currentDaysArray.map((day) => {
                    return(
                        <div className = {"calendar-day" + (day.currentMonth ? "current" : "") + (day.selected ? "selected" : "")}
                            onClick = {() => props.changeSelectedDay(day)}
                        >
                            <p>{day.dateDay}</p> 
                        </div>
                    )
                })
            }
        </div>
    )

}

export default CalendarData;