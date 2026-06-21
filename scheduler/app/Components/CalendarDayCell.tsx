"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import '.././globals.css';
import '../Styling/style.css';
import mockEventData from '../Data/MockEventData';

interface CalendarDayCellProps {
    dateObj: any;
    events: any[];
    changeSelectedDay: (date: any) => void;
}
// Helper component to isolate layout measurement and observer per cell block
const CalendarDayCell = ({ dateObj, events, changeSelectedDay }: CalendarDayCellProps) => {
    const cellRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState<number>(events.length);

    useEffect(() => {
        if (!cellRef.current || !headerRef.current) return;

        const calculateFittingEvents = () => {
            const cellHeight = cellRef.current!.clientHeight;
            const headerHeight = headerRef.current!.clientHeight;

            const verticalPadding = 16; 
            const availableHeight = cellHeight - headerHeight - verticalPadding;

            const ROW_HEIGHT = 24; 
            const ROW_GAP = 4;     
            const TOTAL_ITEM_HEIGHT = ROW_HEIGHT + ROW_GAP;


            if (events.length * TOTAL_ITEM_HEIGHT - ROW_GAP <= availableHeight) {
                setVisibleCount(events.length);
            } else {

                let k = Math.floor((availableHeight - ROW_HEIGHT) / TOTAL_ITEM_HEIGHT);
                

                if (k < 0) k = 0; 
                setVisibleCount(k);
            }
        };


        const observer = new ResizeObserver(() => {
            requestAnimationFrame(calculateFittingEvents);
        });

        observer.observe(cellRef.current);
        calculateFittingEvents();

        return () => observer.disconnect();
    }, [events.length]);

    const hasOverflow = visibleCount < events.length;
    const remainingCount = events.length - visibleCount;

    return (
        <div 
            ref={cellRef}
            className={`calendar-day min-h-[5rem] w-full h-full border-r border-b border-gray-100 hover:bg-black/5 cursor-pointer transition-colors p-2 flex flex-col justify-start overflow-hidden ${
                dateObj.currentMonth ? "text-black bg-white" : "text-gray-400 bg-gray-50/50"
            } ${
                dateObj.selected ? "!bg-blue-50/50 text-[#1532A8]" : ""
            }`}
            onClick={() => changeSelectedDay(dateObj)}
        >

            <div ref={headerRef} className="day-label-div flex w-full justify-center items-start pb-2 flex-shrink-0">
                <p className={`calendar-day-label text-sm font-semibold rounded-full p-1 min-w-[1.75rem] text-center ${
                    dateObj.selected ? "bg-[#1532A8] text-white font-bold" : ""
                }`}>
                    {dateObj.dateDay}
                </p> 
            </div>

            <div className="day-event-div w-full flex flex-col gap-1 overflow-hidden flex-1">

                {events.slice(0, visibleCount).map((event) => (
                    <div 
                        key={event.id} 
                        className="flex w-full h-6 text-xs bg-[#1532A8] text-white rounded px-1.5 py-0.5 truncate shadow-xs font-medium items-center flex-shrink-0"
                        title={event.title}
                        onClick={(e) => {
                            // UPDATED: Prevents bubbling up to double fire the parent container div click
                            e.stopPropagation(); 
                            changeSelectedDay(dateObj);
                        }}
                    >
                        <div className="day-event-content flex items-center truncate">
                            <div className="event-starttime-div pr-1 flex-shrink-0">
                                <p className="event-starttime opacity-80 scale-90">
                                    {event.formattedTime}
                                </p>
                            </div>
                            <div className="event-title-div truncate">
                                <p className="event-title truncate">{event.title}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Clickable fallback element for overflowing tracking data */}
                {hasOverflow && (
                    <div 
                        className="flex w-full h-6 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded px-1.5 py-0.5 font-bold items-center flex-shrink-0 cursor-pointer select-none transition-colors"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevents cell click selection trigger fires
                            changeSelectedDay(dateObj);
                        }}
                    >
                        + {remainingCount} more...
                    </div>
                )}
            </div>
        </div>
    );
}

export default CalendarDayCell;