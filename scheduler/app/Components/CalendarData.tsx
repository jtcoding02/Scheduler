"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AddButtonSVG from '../Assets/AddButton.svg';
import mockEventData from '../Data/MockEventData';
import CalendarDayCell from './CalendarDayCell';
//I think this is to fill up the actual calendar...
//Not dropdown

interface CalendarEvent {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    description?: string;
}

function CalendarData({...props}){

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

    const getCalendarRows = (daysNum: number) => {

    }

    //Get Month Year
    const currentMonth =  props.date.getMonth();
    const currentYear = props.date.getFullYear();
    const firstDayOfMonth = new Date(props.date.getFullYear(), props.date.getMonth(), 1);
    const lastDayOfMonth = getEndDateOfMonth(props.date.getMonth(), props.date.getFullYear());
    const daysInMonth = getDaysInMonth(props.date.getMonth(), props.date.getFullYear());
    
    //Which day, Sun, Mon, Tue, Wed, Thu, Fri, Sat, Sun
    const titleDay = firstDayOfMonth.getDay();
    

    const havePreviousMonth = false;
    const haveNextMonth = false;

    const getRowsNum = (days : number, col : number) =>{
        const remainder = days % col;
        //if no remainder
        if (remainder === 0) {
            console.log("No Remainder")
            const rows = days / col;
            console.log("Rows: " + rows);
            return rows; 
        }
        else{
            console.log("Remainder")
        
            const rows = Math.floor(days / col) + 1;
            console.log("Rows: " + rows);
            return rows;
        }
    }
    
    const columnNum = 7;
    const [numOfRows, setNumOfRows] = useState()
    const rowsNum = getRowsNum(daysInMonth, columnNum);
    const numberOfDays = rowsNum * columnNum;
    const currentDaysArray = [];

    //If month starts on Tuesday (2), go back 2 days to previous month
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(firstDayOfMonth.getDate() - titleDay);


    //const [currentDays, setCurrentDays] = useState([]);

    const [newDay, setNewDay] = useState<number>(firstDayOfMonth.getDate());

    //use pop up to push
    //const eventData = props.events;
    // If coming from props, ensure it's declared:
    const eventData: CalendarEvent[] = props.events;
    //edit later to adjust to different month
    //to remove useless rows

    

    //Convert ISO Date to dictionary
    const convertISODate = (isoDate : string) => {
        const eventDate = new Date(isoDate);
        const formatter = new Intl.DateTimeFormat('en-SG', {
            timeZone: 'Asia/Singapore',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hourCycle: 'h23'
        });

        // Type the accumulator explicitly as Record<string, string>
  

        const eventDateData = formatter.formatToParts(eventDate);

        const d = eventDateData.reduce<Record<string, string>>((acc, part) => {
            acc[part.type] = part.value;
            return acc;
        }, {});

        const y = Number(d.year);
        const m = Number(d.month) - 1;
        const day = Number(d.day);
        const h = Number(d.hour);
        const min = Number(d.minute);
        const second = Number(d.second);
        const date = new Date(y,m,day,h,min,second);

        //const d = eventDateData.reduce((acc, part) => ({ ...acc, [part.type]: part.value }), {});

        return date;
    }

    const addZero = (i:number) => {
        if (i < 10){
            const str = "0"+String(i);
            return str;
        }
        else{
            const str = String(i);
            return str;
        }
        
    }
    

    for(let i = 0; i < numberOfDays; i++){
        const loopDate = new Date(startDate);
        loopDate.setDate(startDate.getDate() + i);

        //for example: day = 0, title  = sunday
        //if day is first day and day is sunday
        // if(day === 0 && titleDay === 0){
        //     setNewDay(firstDayOfMonth.getDate() - 7);
        //     firstDayOfMonth.setDate(newDay);
        // }
        // //if day is first and day is not sunday
        // else if (day === 0){
        //     setNewDay(firstDayOfMonth.getDate() + (day - titleDay));
        //     firstDayOfMonth.setDate(newDay);
        //     //firstDayOfMonth.setDate();
        // }
        // else{
        //     setNewDay(firstDayOfMonth.getDate() + 1);
        //     firstDayOfMonth.setDate(newDay);
        //     //firstDayOfMonth.setDate(dayOfMonth.getDate() + 1);
        // }

        let calendarDay = {
            currentMonth: (loopDate.getMonth() === props.date.getMonth()),
            date: (new Date(loopDate)),
            month: (loopDate.getMonth()),
            dateDay: loopDate.getDate(),
            selected: (loopDate.toDateString() === props.date.toDateString()),
            year: loopDate.getFullYear()
        }
 
        currentDaysArray.push(calendarDay);
    }

    return (
    <div 
        className={`calendarday-div w-full h-full grid box-border`}
        style={{
            gridTemplateColumns: `repeat(${columnNum}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rowsNum}, minmax(0, 1fr))`

        }}
    >
            {
                currentDaysArray.map((date) => {

                    const day = String(date.dateDay);
                    const month = String(date.month+1);
                    const year = String(date.year);

                    const dateKey = `${day}-${month}-${year}`

                    const dayEvents = eventData.filter((e) => {
                        const eventDate = convertISODate(e.startDate);
                        //const eventDate = new Date(e.startDate);
                        return (
                            eventDate.getDate() === date.dateDay &&
                            eventDate.getMonth() === date.month &&
                            eventDate.getFullYear() === date.year
                        )
                    }).map(e => {
                        const d = convertISODate(e.startDate);
                        return {
                            ...e,
                            formattedTime: `${addZero(d.getHours())}:${addZero(d.getMinutes())}`
                        };
                    });

                    return(
                        <CalendarDayCell 
                        key={dateKey}
                        dateObj={date}
                        events={dayEvents}
                        changeSelectedDay={props.changeSelectedDay}
                        />
                        
                        // <div key = {dateKey} 
                        // className = {`calendar-day min-h-[5rem] w-full h-full border-r border-b border-gray-100 hover:bg-black/5 cursor-pointer transition-colors p-2 flex flex-col justify-center${
                        //     date.currentMonth ? "text-black bg-white" : "text-gray-400 bg-gray-50/50"
                        // } ${
                        //     date.selected ? "!bg-blue-50 text-[#1532A8] font-bold" : ""
                        
                        // }`}
                        //     onClick = {() => props.changeSelectedDay(date)}
                        // >
                        //     <div className = "day-label-div flex w-full justify-center items-start pb-2">
                        //         <p className ={`calendar-day-label text-sm font-semibold rounded-full p-1 min-w-[1.75rem] text-center ${
                        //         date.selected ? "bg-[#1532A8] text-white" : ""
                        //     }`} >{date.dateDay}</p> 
                        //     </div>

                        //     <div className ="day-event-div w-full flex flex-col gap-1 overflow-hidden">
                        //         {dayEvents.map((event) => (
        
                        //         <div 
                        //             key={event.id} 
                        //             className="flex w-full text-xs bg-[#1532A8] text-white rounded px-1.5 py-0.5 truncate shadow-xs font-medium min-h-[1.5rem] items-center"
                        //             title={event.title} // Shows full name when hovered
                        //         >

                        //             <div className = "day-event-content flex">
                        //                 <div className ="event-starttime-div pr-1">
                        //                     <p className ="event-starttime">
                        //                         {`${addZero(convertISODate(event.startDate).getHours())}:${addZero(convertISODate(event.startDate).getMinutes())}`}
                        //                     </p>
                        //                 </div>
                        //                 <div className="event-title-div">
                        //                     <p className="event-title">{event.title}</p>
                        //                 </div>
                                        
                        //             </div>

                                    
                        //         </div>


                        //     ))}
                        //     </div>

                        // </div>
                    )
                })
            }
        </div>
    )

}

export default CalendarData;