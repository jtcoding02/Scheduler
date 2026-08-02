"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import '.././globals.css';
import '../Styling/style.css';
import mockEventData from '../Data/MockEventData';
import VisibilityIcon from '@mui/icons-material/Visibility'; 
import EditIcon from '@mui/icons-material/Edit';             
import DeleteIcon from '@mui/icons-material/Delete';

interface CalendarEventCardProps {
    event: any;
    onAction: (mode: 'view' | 'edit' | 'delete') => void;
}

const CalendarEventCard = ({ event, onAction }: CalendarEventCardProps) => {
    // Helper function to safely format ISO strings into readable local times
    const formatTime = (isoString: string) => {
        if (!isoString) return '--:--';
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit', 
            hourCycle: 'h23' 
        });
    };

    const startTime = formatTime(event.startDate);
    const endTime = formatTime(event.endDate);

    return(
<div className="event-card-div flex flex-col bg-[#F7F7F7] border-[0.2rem] border-[#8B8B8B] rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
            <div className="flex justify-between  gap-3 mb-2 align-center items-center">
                <h3 className="font-bold text-black text-lg leading-tight break-words flex-1">
                    {event.title}
                </h3>
                
                <div className="flex items-center gap-1 flex-shrink-0">
                    <button 
                        onClick={() => onAction('view')}
                        className="p-1.5 hover:bg-[#1B2D78] text-white rounded-md transition-colors bg-[#1532A8]" 
                        title="View Details"
                    >
                        <VisibilityIcon className="size-4" />
                    </button>
                    <button 
                        onClick={() => onAction('edit')}
                        className="p-1.5 hover:bg-gray-100 rounded-md hover:text-green-600 transition-colors bg-white ring-inset ring-[0.2rem] ring-[#1532A8] text-[#1532A8]" 
                        title="Edit Event"
                    >
                        <EditIcon className="size-5" />
                    </button>
                    <button 
                        onClick={() => onAction('delete')}
                        className="p-1.5 hover:bg-red-800 rounded-md transition-colors bg-red-600" 
                        title="Delete Event"
                    >
                        <DeleteIcon className="size-5 text-white"/>
                    </button>
                </div>
            </div>

            <div className="text-md font-semibold text-black rounded-md w-fit border border-gray-100 mb-1">
                {startTime} - {endTime}
            </div>

            {event.description && (
                <div className='py-2'>
                    <div className=
                    'text-bold text-black font-bold'>
                    Description:
                    </div>
                    <div className="text-sm text-black mt-3  border-t border-gray-100 leading-relaxed">
                        {event.description}
                    </div>
                </div>
                
            )}
        </div>
    )

    
}

export default CalendarEventCard;