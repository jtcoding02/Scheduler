"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import '.././globals.css';
import '../Styling/style.css';
import mockEventData from '../Data/MockEventData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close'

interface CreateNewEventProps {
    events: any[];
    onClose: () => void;
    onSave: (newEvent: any) => void;
    
}

const CreateNewEvent = ({ events, onClose, onSave }: CreateNewEventProps) => {

    // Controlled Form States
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');
    const eventData = events;
    const userid = 1;

    const handleClear = () => {
        setTitle('');
        setStartDate('');
        setStartTime('');
        setEndDate('');
        setEndTime('');
        setDescription('');
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 1. Validate mandatory fields
        if (!title || !startDate || !startTime) {
            alert('Please fill out at least Title, Start Date, and Start Time.');
            return;
        }

        // 2. Safely parse Start Time
        let startISO;
        try {
            const parsedStart = new Date(`${startDate}T${startTime}`);
            if (isNaN(parsedStart.getTime())) {
                alert('Invalid Start Date or Time input.');
                return;
            }
            startISO = parsedStart.toISOString();
        } catch (err) {
            alert('Invalid Start Date or Time input.');
            return;
        }

        // 3. Safely handle End Time logic to prevent "Invalid Value" crashes
        let endISO = startISO; 
        
        // Check if the user has touched or entered anything into either end field
        if (endDate || endTime) {
            // Enforce that BOTH must be filled together to make a valid timeline
            if (!endDate || !endTime) {
                alert('To set an end time, please fill out BOTH End Date and End Time fields.');
                return;
            }
            
            try {
                const parsedEnd = new Date(`${endDate}T${endTime}`);
                // Check if JavaScript successfully parsed the string structure
                if (isNaN(parsedEnd.getTime())) {
                    alert('Invalid End Date or Time entry value.');
                    return;
                }
                endISO = parsedEnd.toISOString();
            } catch (err) {
                alert('Invalid End Date or Time entry value.');
                return;
            }
        }

        const newEvent = {
            id: Date.now(), // Generate unique numeric runtime ID
            title, //
            startDate: startISO,
            endDate: endISO,
            description //
        };

        onSave(newEvent); //
    };

    return(
        
        <div className="modal-div flex flex-col min-w-[35rem] p-6 bg-white text-black text-left">
            <div className="modal-header-div flex justify-between items-center pb-4 border-b border-gray-200">
                <div className="modal-title-div">
                    <p className="modal-title text-2xl font-bold text-[#1532A8]">
                        Create New Event
                    </p>
                </div>
                <div className ="modal-close-div">
                    <button 
                        onClick={onClose}
                        className="size-10 flex justify-center items-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md" 
                        title="Close Panel"
                    >
                        <CloseIcon className="size-6" />
                    </button>
                </div>
            </div>

            {/* Form Fields Container */}
            <form onSubmit={handleCreate} className="modal-content-div flex flex-col gap-4 py-4">
                {/* Title */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm text-gray-700">Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                        placeholder="Enter title here..."
                    />
                </div>

                {/* Start Time Section */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm text-gray-700">Start Time</label>
                    <div className="flex gap-2">
                        <input 
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                        />
                        <input 
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                        />
                    </div>
                </div>

                {/* End Time Section */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm text-gray-700">End Time</label>
                    <div className="flex gap-2">
                        <input 
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                        />
                        <input 
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm text-gray-700">Description (Optional)</label>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8] min-h-[4rem] resize-y"
                        placeholder="Write a description here if needed..."
                    />
                </div>

                {/* Submission Action Grid */}
                <div className="modal-buttons-div flex justify-end gap-3 mt-4 pt-4 border-t border-gray-200">
                    <button 
                        type="button"
                        onClick={handleClear}
                        className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all font-semibold text-sm"
                    >
                        CLEAR
                    </button>
                    <button 
                        type="submit"
                        className="px-5 py-2.5 rounded-lg bg-[#1532A8] hover:bg-[#2546c4] text-white transition-all font-bold text-sm shadow-md"
                    >
                        CREATE
                    </button>
                </div>
            </form>

            {/* <div className = "modal-content-div">
                <div className="title-field-div modal-field-div">
                    <div className="title-label-div modal-label-div">
                        <p className = "title-label modal-label">
                            Title
                        </p>
                    </div>
                    <div className="title-field-div modal-field-div">
                        <input className = "field-input modal-input"/>
                    </div>
                </div>

                <div className="start-duration-div">
                    <div className="start-title-div modal-label-div">
                        <p className = "start-title-txt modal-label">
                            Start Time

                        </p>
                    </div>
                    
                    <div className="start-fields-div">
                        <div className="start-date-div">
                            <input className = "start-date-input date-input duration-input"/>
                        </div>

                        <div className="start-time-div">
                            <input className = "start-time-input time-input duration-input"/>
                        </div>
                    </div>

                    
                </div>

                <div className="end-duration-div">
                     <div className="end-title-div modal-label-div">
                        <p className = "end-title-txt modal-label">
                            End Time
                        </p>
                    </div>
                    
                    <div className="end-fields-div">
                        <div className="end-date-div">
                            <input className = "end-date-input date-input duration-input"/>
                        </div>

                        <div className="end-time-div">
                            <input className = "end-time-input time-input duration-input"/>
                        </div>
                    </div>


                    
                </div>

                <div className="description-div">
                    <div className="desc-title-div modal-label-div">
                        <p className = "desc-title modal-label"></p>
                    </div>
                    <div className="desc-field-div modal-input-div">
                        <input className = "desc-field modal-input"/>
                    </div>
                </div>

                
            </div>
            <div className = "modal-buttons-div">
                <div className="create-btn-div modal-btn-div">
                    <button className="create-btn modal-button">
                        <div className="create-txt-div modal-btn-txt-div">
                            <p className = "create-btn-txt">
                                CREATE
                            </p>
                        </div>
                    </button>
                </div>

                <div className="clear-btn-div">
                    <button className="clear-btn modal-button">
                        <div className="clear-txt-div">
                            <p className = "clear-txt">CLEAR</p>
                        </div>
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default CreateNewEvent;