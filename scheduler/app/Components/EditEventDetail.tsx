"use client";
import React, { useState } from 'react';
import '.././globals.css';
import '../Styling/style.css';
import CloseIcon from '@mui/icons-material/Close';

interface EditEventDetailProps {
    event: {
        id: number;
        title: string;
        startDate: string;
        endDate: string;
        description?: string;
    };
    onClose: () => void;
    onUpdate: (updatedEvent: any) => void;
}

const EditEventDetail = ({ event, onClose, onUpdate }: EditEventDetailProps) => {
    
    // Helper functionality to extract date (YYYY-MM-DD) vs time (HH:mm) components cleanly from ISO format
    const extractDateTime = (isoString: string) => {
        try {
            const dateObj = new Date(isoString);
            if (isNaN(dateObj.getTime())) return { date: '', time: '' };
            
            const YYYY = dateObj.getFullYear();
            const MM = String(dateObj.getMonth() + 1).padStart(2, '0');
            const DD = String(dateObj.getDate()).padStart(2, '0');
            const hh = String(dateObj.getHours()).padStart(2, '0');
            const mm = String(dateObj.getMinutes()).padStart(2, '0');
            
            return {
                date: `${YYYY}-${MM}-${DD}`,
                time: `${hh}:${mm}`
            };
        } catch (e) {
            return { date: '', time: '' };
        }
    };

    const initialStart = extractDateTime(event.startDate);
    const initialEnd = extractDateTime(event.endDate);

    // Initial State tracking configurations
    const [title, setTitle] = useState(event.title);
    const [startDate, setStartDate] = useState(initialStart.date);
    const [startTime, setStartTime] = useState(initialStart.time);
    const [endDate, setEndDate] = useState(initialEnd.date);
    const [endTime, setEndTime] = useState(initialEnd.time);
    const [description, setDescription] = useState(event.description || '');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !startDate || !startTime) {
            alert('Please specify a Title, Start Date, and Start Time.');
            return;
        }

        let startISO;
        try {
            const parsedStart = new Date(`${startDate}T${startTime}`);
            if (isNaN(parsedStart.getTime())) {
                alert('Invalid Start date/time structure.');
                return;
            }
            startISO = parsedStart.toISOString();
        } catch (err) {
            alert('Invalid Start date/time structure.');
            return;
        }

        let endISO = startISO;
        if (endDate || endTime) {
            if (!endDate || !endTime) {
                alert('Please provide BOTH an End Date and an End Time to adjust termination window bounds.');
                return;
            }
            try {
                const parsedEnd = new Date(`${endDate}T${endTime}`);
                if (isNaN(parsedEnd.getTime())) {
                    alert('Invalid End date/time format details.');
                    return;
                }
                endISO = parsedEnd.toISOString();
            } catch (err) {
                alert('Invalid End date/time format details.');
                return;
            }
        }

        // Construct final payload
        const updatedPayload = {
            ...event,
            title,
            startDate: startISO,
            endDate: endISO,
            description
        };

        onUpdate(updatedPayload);
    };

    return (
        <div className="modal-div flex flex-col min-w-[35rem] p-6 bg-white text-black text-left">
            <div className="modal-header-div flex justify-between items-center pb-4 border-b border-gray-200">
                <div className="modal-title-div">
                    <p className="modal-title text-2xl font-bold text-[#1532A8]">
                        Edit Event Context
                    </p>
                </div>
                <div className="modal-close-div">
                    <button 
                        type="button"
                        onClick={onClose}
                        className="size-10 flex justify-center items-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md"
                    >
                        <CloseIcon className="size-6" />
                    </button>
                </div>
            </div>

            <form onSubmit={handleFormSubmit} className="modal-content-div flex flex-col gap-4 py-4">
                {/* Title element */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm text-gray-700">Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8]"
                    />
                </div>

                {/* Starting Context bounds */}
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

                {/* End Context bounds */}
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

                {/* Content description wrapper */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm text-gray-700">Description (Optional)</label>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1532A8] min-h-[4rem] resize-y"
                    />
                </div>

                {/* Action buttons */}
                <div className="modal-buttons-div flex justify-end gap-3 mt-4 pt-4 border-t border-gray-200">
                    <button 
                        type="button"
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all font-semibold text-sm"
                    >
                        CANCEL
                    </button>
                    <button 
                        type="submit"
                        className="px-5 py-2.5 rounded-lg bg-[#1532A8] hover:bg-[#2546c4] text-white transition-all font-bold text-sm shadow-md"
                    >
                        SAVE CHANGES
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditEventDetail;