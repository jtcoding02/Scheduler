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
                <div className="modal-title-div text-2xl">
                    <p className="font-bold text-black">
                        View Event Details
                    </p>
                </div>
                <div className="modal-close-div">
                    {/* bg-red-600 text-white hover:bg-red-700 */}
                    <button 
                        type="button"
                        onClick={onClose}
                        
                        className="modal-close-btn bg-black text-white hover:bg-gray-700 transition-colors shadow-md" 
                        title="Close Panel"
                    >
                        <CloseIcon className="size-6 font-bold" />
                    </button>
                </div>
            </div>

            {/* Event Summary Parameters */}
            <div className="modal-content-div flex flex-col gap-5 py-6">
                {/* Title */}
                <div className="flex flex-col gap-1 title-group-div">
                    <div className="title-span-div">
                        <span className="text-xl font-bold tracking-wider text-black">Title</span>
                    </div>
                    <div className="title-div pt-2">
                        <p className="modal-field">
                            {event.title || "Untitled Event"}
                        </p>
                    </div>
                    
                    
                </div>

                {/* Timeline info */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="modal-title">Starts At</span>
                        <p className="modal-field">
                            {formatDateTime(event.startDate)}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="modal-title">Ends At</span>
                        <p className="modal-field">
                            {formatDateTime(event.endDate)}
                        </p>
                    </div>
                </div>

                {/* Description info */}
                <div className="flex flex-col gap-1">
                    <span className="modal-title pb-2">Description</span>
                    <div className="modal-description">
                        {event.description || <span className="italic text-gray-400">No additional details supplied.</span>}
                    </div>
                </div>
            </div>

            {/* Action Toolbar */}
            <div className="rounded-lg flex justify-between items-center py-2 w-full">

                <div className="flex gap-3 w-full pr-4">
                    
                    <button 
                        type="button"
                        onClick={onEditClick}
                        className="w-full px-5 py-2.5 rounded-lg bg-[#1532A8] hover:bg-[#2546c4] text-white transition-all font-bold text-sm shadow-md"
                    >
                        EDIT
                    </button>
                </div>

                <div className="flex gap-3 w-full">
                    <button 
                    type="button"
                    onClick={onDeleteClick}
                    className="w-full x-5 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all font-bold text-sm"
                >
                        DELETE
                    </button>
                    
                </div>

                

                
                
                
            </div>
        </div>
    );
}

export default ViewEventDetail;