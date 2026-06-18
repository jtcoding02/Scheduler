"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AddButtonSVG from '../Assets/AddButton.svg';
import CalendarData from './CalendarData'

function Calendar () {

    // const calendarTitleDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // const calendarTitleMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const today = new Date();
    const day = today.getDate();
    const dayOfWeek = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();

    const [currentDate, setCurrentDate] = useState(today);
    const [currentDay, setCurrentDay] = useState(day);
    const [currentTitleDay, setCurrentTitleDay] = useState(dayOfWeek);
    const [currentMonth, setCurrentMonth] = useState(month);
    const [currentYear, setCurrentYear] = useState(year);
    
    const [selectedDate, setSelectedDate] = useState(today);
    //const [selectedDate, setSelectedDate] = useState(currentDate);
    const [selectedDay, setSelectedDay] = useState(currentDay);
    const [selectedTitleDay, setSelectedTitleDay] = useState(currentTitleDay);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedYear, setSelectedYear] = useState(currentYear);

    
    // const [calendarTitleDays, setCalendarTitleDays] 
    // = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

    // const [calendarTitleMonths, setCalendarTitleMonths] 
    // = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

    const defaultMonth = 'Jun';
    const defaultYear = '2026';

    //change to changeSelectedDay
    const changeSelectedDay = (day: { year: number; month: number; dateDay: number}) => {
        setSelectedDate(new Date(day.year, day.month, day.dateDay));
    }

    return (
        
        <div className = "calendar-div">
            <div className="calendar-menu-div">
                <div className="menubar-div flex w-full p-2" >
                    <div className = "menubar flex w-full justify-between px-4">
                        <div className = "menubar-left">
                            <div className = "datepicker-div flex p2 justify-center items-center text-center font-semibold text-black pr-2 text-[2rem]">
                                {/* <div className="prev-month-div">

                                </div> */}
                                <div className="month-div flex">
                                    <p className="month-label pr-2">{days[selectedTitleDay]}, {selectedDay} {months[selectedMonth]}</p>
                                    {/* <input type="month" className="month-dropdown text-black" name="month"/>*/}
                                </div> 
                                <div className="year-div flex">
                                    <p className="year-label">{selectedYear}</p>
                                    {/* <input type="year" className="year-dropdown text-black" name="year"/> */}
                                    
                                </div>
                                {/* <div className="next-month-div">

                                </div> */}
                            </div>
                        </div>
                        <div className = "menubar-right">
                            <div className="create-btn-div">
                                <button className="create-btn p-3 rounded-lg flex bg-[#1532A8] hover:bg-[#324EBE] focus:bg-[#324EBE] justify-center">
                                    <div className="create-label-div flex justify-center items-center pr-2">
                                        <p className="create-label font-bold text-white text-base ">CREATE</p>
                                    </div>
                                    <div className="create-logo-div flex justify-center items-center align-center">
                                        <Image src={AddButtonSVG} className = "create-logo size-[1rem]"  alt = "Create Event Button Logo" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
        </div>
            </div>
            <div className = "calendar">
                <div className="calendar-title-div">
                    {
                        days.map((titleday)=> {
                            return (
                                <div className="calendar-title-day">
                                    <p className="title-day-label">
                                        {titleday}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="calendar-grid-div">
                    <CalendarData date={selectedDate} changeSelectedDay = {changeSelectedDay} />
                </div>
            </div>
        </div>
    );
}

export default Calendar;

