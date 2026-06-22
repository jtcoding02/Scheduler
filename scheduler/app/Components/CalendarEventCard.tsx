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
<div className="event-card-div flex flex-col bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
            <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="font-bold text-[#1532A8] text-lg leading-tight break-words flex-1">
                    {event.title}
                </h3>
                
                <div className="flex items-center gap-1 flex-shrink-0 text-gray-500">
                    <button 
                        onClick={() => onAction('view')}
                        className="p-1.5 hover:bg-gray-100 rounded-md hover:text-[#1532A8] transition-colors" 
                        title="View Details"
                    >
                        <VisibilityIcon className="size-5" />
                    </button>
                    <button 
                        onClick={() => onAction('edit')}
                        className="p-1.5 hover:bg-gray-100 rounded-md hover:text-green-600 transition-colors" 
                        title="Edit Event"
                    >
                        <EditIcon className="size-5" />
                    </button>
                    <button 
                        onClick={() => onAction('delete')}
                        className="p-1.5 hover:bg-gray-100 rounded-md hover:text-red-600 transition-colors" 
                        title="Delete Event"
                    >
                        <DeleteIcon className="size-5" />
                    </button>
                </div>
            </div>

            <div className="text-sm font-semibold text-gray-600 bg-gray-50 rounded-md px-2 py-1 w-fit border border-gray-100 mb-1">
                {startTime} - {endTime}
            </div>

            {event.description && (
                <div className="text-sm text-gray-500 mt-3 pt-3 border-t border-gray-100 leading-relaxed">
                    {event.description}
                </div>
            )}
        </div>
    )

    
}

export default CalendarEventCard;