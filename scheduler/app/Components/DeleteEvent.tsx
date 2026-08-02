"use client";
import React from 'react';
import '.././globals.css';
import '../Styling/style.css';
import CloseIcon from '@mui/icons-material/Close';

interface DeleteEventProps {
    // eventId: number;
    // eventTitle: string;
    event: {
        id: number;
        title: string;
        startDate: string;
        endDate: string;
        description?: string;
    };
    onClose: () => void;
    onConfirmDelete: (id: number) => void;
}

const DeleteEvent = ({ event, onClose, onConfirmDelete }: DeleteEventProps) => {
    
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
        <div className="modal-div flex flex-col min-w-[28rem] max-w-[32rem] p-6 bg-white text-black text-left">
            {/* Header section boundary block */}
            <div className="modal-header-div flex justify-between items-center pb-3 border-b border-gray-200">
                <div className="modal-title-div">
                    <p className="text-black text-xl font-bold">
                        Delete Event
                    </p>
                </div>
                <div className="modal-close-div">
                    <button 
                        type="button"
                        onClick={onClose}
                        className="size-8 flex justify-center items-center rounded-full bg-red-600 text-white hover:bg-red-800 transition-colors"
                        title="Dismiss Panel"
                    >
                        <CloseIcon className="size-5" />
                    </button>
                </div>
            </div>

            {/* Warning Info Area */}
            <div className="modal-content-div py-5 flex flex-col gap-2">
                <p className="text-base text-gray-700 font-medium">
                    Are you sure you want to permanently delete this event?
                </p>
                <div className="modal-field bg-red-50/50 border border-red-100 rounded-lg p-3 mt-1">
                    <div className="pb-2">
                        <p className="text-base font-semibold text-[#1532A8] truncate">
                        {/* <span className="text-red-600 font-bold mr-1.5">Target:</span>  */}
                        {event.title || "Untitled Event"}
                        </p>
                    </div>
                    
                    <div className="flex text-sm pb-2">
                        <span className="pr-1 flex font-semibold">Start Date:</span>
                        <p className="flex">{formatDateTime(event.startDate)}</p>
                    </div>
                    <div className="flex text-sm pb-2">
                        <span className="pr-1 flex font-semibold">End Date:</span>
                        <p className="flex">{formatDateTime(event.endDate)}</p>
                    </div>
                    {
                        
                    }
                    <div className="">
                        <p className=""></p>
                    </div>
                    <div className="">
                        <p className=""></p>
                    </div>
                    <div className="">
                        <p className=""></p>
                    </div>
                    <div className="">
                        
                    </div>
                    <div className="">
                        
                    </div>
                    <div className="">
                        
                    </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                    This modification cannot be undone. The schedule entry will be stripped from your active calendar records immediately.
                </p>
            </div>

            {/* Confirmation Controls footer bar */}
            <div className="w-full flex justify-end gap-3 pb-2">
                <div className = "w-full">
                    <button 
                    type="button"
                    onClick={() => onConfirmDelete(event.id)}
                    className="w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all font-bold text-sm shadow-sm"
                >
                    DELETE
                    </button>
                </div>
                <div className = "w-full">
                     <button 
                    type="button"
                    onClick={onClose}
                    className="w-full px-4 py-2 rounded-lg bg-[#1532A8] text-white hover:bg-[#2546c4] transition-all font-semibold text-sm"
                >
                    CANCEL
                    </button>
                </div>
               
                
            </div>
        </div>
    );
};

export default DeleteEvent;