"use client";
import React from 'react';
import '.././globals.css';
import '../Styling/style.css';
import CloseIcon from '@mui/icons-material/Close';

interface ViewEventDetailProps {
    event: {
        id: number;
        title: string;
        startDate: string;
        endDate: string;
        description?: string;
    };
    onClose: () => void;
    onEditClick: () => void;
    onDeleteClick: () => void;
}

const ViewEventDetail = ({ event, onClose, onEditClick, onDeleteClick }: ViewEventDetailProps) => {
    const formatDateTime = (isoString: string) => {
        try {
            const dateObj = new Date(isoString);
            if (isNaN(dateObj.getTime())) return "N/A";
            
            // Format to: "DD/MM/YYYY, HH:mm"
            return dateObj.toLocaleString('en-SG', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hourCycle: 'h23'
            });
        } catch (e) {
            return "N/A";
        }
    };

    return (
        <div className="modal-div flex flex-col min-w-[35rem] p-6 bg-white text-black text-left">
            {/* Header Area */}
            <div className="modal-header-div flex justify-between items-center pb-4 border-b border-gray-200">
                <div className="modal-title-div">
                    <p className="modal-title text-2xl font-bold text-[#1532A8]">
                        Event Details
                    </p>
                </div>
                <div className="modal-close-div">
                    <button 
                        type="button"
                        onClick={onClose}
                        className="size-10 flex justify-center items-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md" 
                        title="Close Panel"
                    >
                        <CloseIcon className="size-6" />
                    </button>
                </div>
            </div>

            {/* Event Summary Parameters */}
            <div className="modal-content-div flex flex-col gap-5 py-6">
                {/* Title */}
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Event Title</span>
                    <p className="text-xl font-semibold text-gray-900 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        {event.title || "Untitled Event"}
                    </p>
                </div>

                {/* Timeline info */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Starts At</span>
                        <p className="text-base font-medium text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            {formatDateTime(event.startDate)}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Ends At</span>
                        <p className="text-base font-medium text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            {formatDateTime(event.endDate)}
                        </p>
                    </div>
                </div>

                {/* Description info */}
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Description</span>
                    <div className="text-base text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 min-h-[6rem] whitespace-pre-wrap">
                        {event.description || <span className="italic text-gray-400">No additional details supplied.</span>}
                    </div>
                </div>
            </div>

            {/* Action Toolbar */}
            <div className="modal-buttons-div flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <button 
                    type="button"
                    onClick={onDeleteClick}
                    className="px-5 py-2.5 rounded-lg border-2 border-red-600 text-red-600 hover:bg-red-50 transition-all font-bold text-sm"
                >
                    DELETE
                </button>
                
                <div className="flex gap-3">
                    <button 
                        type="button"
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all font-semibold text-sm"
                    >
                        CLOSE
                    </button>
                    <button 
                        type="button"
                        onClick={onEditClick}
                        className="px-5 py-2.5 rounded-lg bg-[#1532A8] hover:bg-[#2546c4] text-white transition-all font-bold text-sm shadow-md"
                    >
                        EDIT
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewEventDetail;