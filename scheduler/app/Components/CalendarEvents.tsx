"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import '.././globals.css';
import '../Styling/style.css';
import mockEventData from '../Data/MockEventData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close'
import CalendarEventCard from './CalendarEventCard';

//< when closed, should open
//> when opened, should close
//closeDetail is 

interface CalendarEventsProps {
    d: string;
    m: string;
    y: string;
    events: any[];
    isCollapsed: boolean;
    onToggle: () => void;
    onClose: () => void;
}

const CalendarEvents = ({ d, m, y, events, isCollapsed, onToggle, onClose } : CalendarEventsProps) => {
    //means opened if false
    //means closed is true
    const [isDetailClosed, setIsDetailClosed] = useState<Boolean>(false);

    
    if (isCollapsed) {
        return (
            <div className="flex flex-col h-full w-full items-center py-4 gap-6">
                <button 
                    onClick={onToggle} 
                    className="size-10 flex justify-center items-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-md" 
                    title="Expand Events"
                >
                    <ArrowBackIosIcon className="size-5" />
                </button>
                <button 
                    onClick={onClose} 
                    className="size-10 flex justify-center items-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md" 
                    title="Close Panel"
                >
                    <CloseIcon className="size-6" />
                </button>
            </div>
        );
    }
    
    return (
        <div className = "events-detail-div flex flex-col h-full w-full bg-gray-50">
            <div className ="events-header-div flex justify-between items-center p-4 border-b border-gray-200 min-h-[4rem] flex-shrink-0 bg-white">
                <div className="detail-header-left flex items-center gap-4">
                    <div className = "detail-arrow-div">
                        <button 
                        onClick={onToggle}
                        className = "detail-arrow-btn size-10 flex justify-center items-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-md">
                            
                            <ArrowForwardIosIcon className="forward-arrow size-5"/>
                            
                        </button>
                    </div>
                    <div className="detail-date-div flex">
                        <p className="detail-date text-xl text-black font-bold tracking-tight" >
                            {d} {m} {y}
                        </p>

                    </div>
                </div>
                <div className="detail-header-right flex items-center">
                        <button 
                        onClick={onClose}
                        className = "detail-close-btn size-10 flex justify-center items-center rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors shadow-md">
                            <CloseIcon className ="close-icon size-6"/>
                        </button>
                </div>
            </div>
            <div className ="events-list-div flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                {events.length > 0 ? (
                    events.map((e) => (
                        <CalendarEventCard key={e.id} event={e} />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                        <p className="text-sm font-medium">No events scheduled.</p>
                        <p className="text-xs mt-1">Enjoy your free time!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CalendarEvents;