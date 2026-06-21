"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AddButtonSVG from '../Assets/AddButton.svg';
import CalendarData from './CalendarData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    
    const selectDate = today;

    const changeSelectedDay = (day: { year: number; month: number; dateDay: number}) => {
        
        setSelectedDate(new Date(day.year, day.month, day.dateDay));
    }

    const changeSelectedMonth = (year: number, month: number, dateDay: number, prevMonth: boolean,) => {
        
        let d = dateDay;
        let m = month;
        let y = year;

        //0 is Jan, 11 is Dec
        if(prevMonth){
            if(m === 0){
                y = y - 1;
                m = 11;
            }
            else{
                m = m - 1 ;
            }
        }
        else{
            if(m === 11){
                y += 1;
                m = 0;
            }
            else{
                m = m + 1;
            }
        }

        setSelectedDate(new Date(y, m, d));
    }

    //change to changeSelectedDay
    // const changeSelectedDay = (day: { year: number; month: number; dateDay: number}) => {
        
    //     setSelectedDate(new Date(day.year, day.month, day.dateDay));
    // }

    return (
        /* Remove box-border */
        /*Flex box shrink 1: all items shrink equally to fit container, 0 is items will not shrink, can cause overflow */
        <div className = "calendar-div flex flex-col p-8 w-full h-full min-h-0 box-border">
            
            <div className="calendar-menu-div flex w-full flex-shrink-0 min-h-[4rem] mb-4">
                <div className="menubar-div flex w-full p-2" >
                    <div className = "menubar flex w-full justify-between px-4">
                        <div className = "menubar-left">
                            <div className = "datepicker-div flex p2 justify-center items-center text-center font-semibold text-black pr-2 text-[2rem]">
                                <div className="prev-month-div flex pr-4">

                                    <div className="prev-btn-div flex">
                                        <button className="prev-month-button rounded-xl bg-black size-[2rem] p-2 flex justify-center items-center flex"
                                        onClick = {() => changeSelectedMonth(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), true)}
                                        >
                                            <ArrowBackIosIcon className="h-full w-full text-white flex justify-center items-center"/>
                                        </button>
                                    </div>
                                    
                                </div>
                                <div className="month-div flex">
                                    <p className="month-label pr-2">{days[selectedDate.getDay()]}, {selectedDate.getDate()} {months[selectedDate.getMonth()]}</p>
                                    {/* <input type="month" className="month-dropdown text-black" name="month"/>*/}
                                </div> 
                                <div className="year-div flex">
                                    <p className="year-label">{selectedDate.getFullYear()}</p>
                                    {/* <input type="year" className="year-dropdown text-black" name="year"/> */}
                                    
                                </div>
                                <div className="next-month-div flex pl-4">
                                    <div className="next-btn-div flex justify-center items-center">
                                        <button className="next-month-button rounded-xl bg-black size-[2rem] p-2 justify-center items-center flex"
                                        onClick = {() => changeSelectedMonth(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), false)}
                                        >
                                             <ArrowForwardIosIcon className="h-full w-full text-white"/>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className = "menubar-right">
                            <div className="create-btn-div">
                                <button className="create-btn p-3 rounded-lg flex bg-[#1532A8] hover:bg-[#324EBE] focus:bg-[#324EBE] justify-center">
                                    <div className="create-label-div flex justify-center items-center pr-2">
                                        <p className="create-label font-bold text-white text-base ">CREATE</p>
                                    </div>
                                    <div className="create-logo-div flex justify-center items-center">
                                        <Image src={AddButtonSVG} className = "create-logo size-[1rem]"  alt = "Create Event Button Logo" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            
            <div className = "calendar w-full flex flex-1 min-h-[32rem] flex-col text-black border border-gray-200 rounded-lg overflow-hidden bg-white shadow-xs">
                <div className="calendar-title-div grid grid-cols-7 flex min-h-[3rem] w-full border-b border-gray-200 bg-gray-50/70 py-3 text-center flex-shrink-0 items-center justify-around">
                    {
                        days.map((titleday, index)=> {
                            return (
                                <div  key={index} className="calendar-title-day  text-center">
                                    <p className="title-day-label text-base text-gray-600 font-bold">
                                        {titleday}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="calendar-grid-div w-full flex-1 min-h-0">
                    <CalendarData date={selectedDate} changeSelectedDay = {changeSelectedDay} />
                </div>
            </div>
        </div>
    );
}

export default Calendar;

