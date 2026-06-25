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

//Add react virtualisation by only rendering events in

interface CalendarEventsProps {
    d: string;
    m: string;
    y: string;
    events: any[];
    isCollapsed: boolean;
    onToggle: () => void;
    onClose: () => void;
    onEventAction: (mode: 'view' | 'edit' | 'delete', event: any) => void;
}

const CalendarEvents = ({ d, m, y, events, isCollapsed, onToggle, onClose, onEventAction } : CalendarEventsProps) => {
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
        <div className="flex flex-col h-full w-full">
            <div className="detail-header-div flex p-4 justify-between items-center border-b border-gray-200 bg-white">
                <div className="detail-header-left flex items-center gap-4">
                    <button onClick={onToggle} className="detail-collapse-btn p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        Close
                    </button>
                    <p className="text-xl text-black font-bold">{d} {m} {y}</p>
                </div>
                <button onClick={onClose} className="size-10 flex justify-center items-center rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors">
                    <CloseIcon className="size-6"/>
                </button>
            </div>
            
            <div className="events-list-div flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                {events.length > 0 ? (
                    events.map((e) => (
                        <CalendarEventCard 
                            key={e.id} 
                            event={e} 
                            onAction={(mode) => onEventAction(mode, e)} 
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                        <p className="text-sm font-medium">No events scheduled.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CalendarEvents;