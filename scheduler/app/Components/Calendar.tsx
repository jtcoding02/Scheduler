"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AddButtonSVG from '../Assets/AddButton.svg';
import CalendarData from './CalendarData'
import CalendarEvents from './CalendarEvents'; // Import the sidebar
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import mockEventData from '../Data/MockEventData'; // Import your events

interface CalendarProps{
    events: any[], 
    onCreateClick: () => void,
    onEventAction: (mode: 'view' | 'edit' | 'delete', event: any) => void
}
function Calendar ({events, onCreateClick, onEventAction} : CalendarProps) {

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

    const [selectedDate, setSelectedDate] = useState(today);
    //const [selectedDate, setSelectedDate] = useState(currentDate);
    const [selectedDay, setSelectedDay] = useState(day);
    const [tempDayBool, setTempDayBool] = useState<boolean>(false); 
    

    
    // const [calendarTitleDays, setCalendarTitleDays] 
    // = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

    // const [calendarTitleMonths, setCalendarTitleMonths] 
    // = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

    const defaultMonth = 'Jun';
    const defaultYear = '2026';
    
    const selectDate = today;

    // --- Sidebar Toggle States ---
    const [showEventsPanel, setShowEventsPanel] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const getDaysInMonth = (month: number, year: number) => {
        const days = new Date(year, month + 1, 0).getDate();
        console.log("Days in Month: " + days); 
        return days;
    }

    const getEndDateOfMonth = (month: number, year: number) => {
        const lastDay = getDaysInMonth(month, year);
        console.log(lastDay);
        const firstDay = new Date(year, month, 1);
        const lastDate = new Date(year, month, lastDay);
        return lastDate; 
    }

    const changeSelectedDay = (day: { year: number; month: number; dateDay: number}) => {
        
        setSelectedDate(new Date(day.year, day.month, day.dateDay));
        setShowEventsPanel(true); 
        setIsCollapsed(false);    
    }

    const changeSavedDay = (day: number) => {
        setSelectedDay(day);
    }

    const changeTempBool = (bool:boolean) => {
        setTempDayBool(bool);
    }

    const changeSelectedMonth = (year: number, month: number, dateDay: number, prevMonth: boolean, tempBool: boolean, savedDay : number) => {
        
        
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

        let d = dateDay;
        const endDay = getDaysInMonth(month, year);
        const newEndDay = getDaysInMonth(m, y);

        const newChangedDate = new Date(y, m, d);
        
        //POTENTIAL END DATES
        //28, 29, 30, 31
        //EITHER: 28, 30, 31
        //OR: 29, 30, 31

        //JAN: 31, FEB: 28/29, MAR: 31
        //APR: 30, MAY: 31, JUN, 30
        //JUL: 31, AUG: 31, SEP: 30
        //OCT: 31, NOV: 30, DEC: 31

        //SCENARIO 1:
        //31 TO 28 TO 31
        // 31 TO 30 TO 31
        
        //IMPOSSIBLE SCENARIO:
        // 31 TO 30 TO 28 TO 30 TO 31
        // 31 TO 30 TO 28 TO 31
        // 31 TO 28 TO 30 TO 31

        //Current Mon is 30
        //Saved Day is 31
        //Next Mon is 28

        //If prev mon < saved day
        if(tempBool){
            //Temp Bool would imply Prev Mon < Saved Day
            //Saved Day: 31, New End Day: 28, Current End Day: 30

            //tempbool faLse, selected day and saved day = 31
            //next mon = 30, so 31 > 30, so tempbool = true, selected day = 30, saved day = 31
            //tempbool = true, selected day = 30, saved day = 31, next mon = 28
            //next mon 28 < 31
            //now check selected day, 30 < or => next mon
            //if selected day < next mon
            //selected day now is next mon
            

            //Other Scenario
            ////Saved Day: 31, New End Day: 30, Current End Day: 28
            //  ig logic wld be 31 -> 28 -> 28 -> 31


            //31 -> 30, 
            //if 28 
            if(newEndDay < savedDay && newEndDay < endDay){
                //TEMP BOOL REMAINS TRUE
                //SAVED DAY IS TRUE
                setSelectedDate(new Date(y, m, newEndDay));
            }
            //if 31 -> 28,
            //if 30
            else if(newEndDay < savedDay){
                setSelectedDate(new Date(y, m, endDay));
            }
            //
            //saved Day: 30 -> endDay -> 28
            //if newEndDay => savedDay
            //if newEndDay >
            else{
                setSelectedDate(new Date(y, m, savedDay));
                setTempDayBool(false);
            }
        }

        //If prev mon >= saved day
        else{

        }

        // if(endDayOfNewMonth < d){
        //     setTempDayBool(true);
        //     setSelectedDate(new Date(y, m, endDayOfNewMonth));
        // }
        // else{
        //     setTempDayBool(false);
        //     setSelectedDay(d);
        //     setSelectedDate(new Date(y, m, d));
        // }

        
    }

    const selectedDateEvents = events.filter((e) => {
        const eventDate = new Date(e.startDate);
        return (
            eventDate.getDate() === selectedDate.getDate() &&
            eventDate.getMonth() === selectedDate.getMonth() &&
            eventDate.getFullYear() === selectedDate.getFullYear()
        );
    });

    //change to changeSelectedDay
    // const changeSelectedDay = (day: { year: number; month: number; dateDay: number}) => {
        
    //     setSelectedDate(new Date(day.year, day.month, day.dateDay));
    // }



    return (
        /* Remove box-border */
        <div className = "flex flex-row w-full h-full min-h-0 overflow-hidden">
                
            <div className="calendar-div flex-1 flex flex-col p-8 min-w-0 min-h-0 box-border transition-all duration-300">
                    
                    <div className="calendar-menu-div flex w-full flex-shrink-0 min-h-[4rem] mb-4">
                        <div className="menubar-div flex w-full p-2" >
                            <div className = "menubar flex w-full justify-between px-4">
                                <div className = "menubar-left">
                                    <div className = "datepicker-div flex p2 justify-center items-center text-center font-semibold text-black pr-2 text-[2rem]">
                                        <div className="prev-month-div flex pr-4">

                                            <div className="prev-btn-div flex">
                                                <button className="prev-month-button rounded-xl bg-black size-[2rem] p-2 flex justify-center items-center"
                                                onClick = {() => changeSelectedMonth(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), true, tempDayBool, selectedDay)}
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
                                                onClick = {() => changeSelectedMonth(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), false, tempDayBool, selectedDay)}
                                                >
                                                    <ArrowForwardIosIcon className="h-full w-full text-white"/>
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className = "menubar-right flex items-center gap-4">
                                    {/* Button to reopen the sidebar if it was completely closed */}
                                    {!showEventsPanel && (
                                        <button 
                                            onClick={() => setShowEventsPanel(true)} 
                                            className="ring-inset ring-[#1532A8] p-3 ring-4 rounded-lg flex justify-center items-center hover:underline "
                                        >
                                            <p className="create-label font-bold text-[#1532A8] text-base ">SHOW EVENTS</p>
                                        </button>
                                    )}
                                    <div className="create-btn-div">
                                        <button 
                                        onClick={onCreateClick}
                                        className="create-btn p-3 rounded-lg flex bg-[#1532A8] hover:bg-[#324EBE] focus:bg-[#324EBE] justify-center">
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
                            <CalendarData date={selectedDate} events={events} changeSelectedDay = {changeSelectedDay} />
                        </div>
                    </div>
            </div>

            {/* Sidebar View Area: Receives dynamic dates and filtered events directly from Calendar state */}
            {/* Sidebar panel area */}
            {showEventsPanel && (
                <div className={`events-page-div h-full transition-all duration-300 border-l border-gray-200 bg-gray-50 flex flex-col flex-shrink-0 ${
                    isCollapsed ? 'w-16 min-w-[4rem]' : 'w-96 min-w-[24rem]'
                }`}>
                    <CalendarEvents 
                        d={String(selectedDate.getDate())} 
                        m={months[selectedDate.getMonth()]} 
                        y={String(selectedDate.getFullYear())} 
                        events={selectedDateEvents}
                        isCollapsed={isCollapsed}
                        onToggle={() => setIsCollapsed(!isCollapsed)}
                        onClose={() => setShowEventsPanel(false)}
                        onEventAction={onEventAction} // <-- ADD THIS CRITICAL LINE HERE
                    />
                </div>
            )}
        </div>  
        
        
           
    );
}

export default Calendar;

