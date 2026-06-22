"use client";
import React from 'react';
import '.././globals.css';
import '../Styling/style.css';
import CloseIcon from '@mui/icons-material/Close';

interface DeleteEventProps {
    eventId: number;
    eventTitle: string;
    onClose: () => void;
    onConfirmDelete: (id: number) => void;
}

const DeleteEvent = ({ eventId, eventTitle, onClose, onConfirmDelete }: DeleteEventProps) => {
    return (
        <div className="modal-div flex flex-col min-w-[28rem] max-w-[32rem] p-6 bg-white text-black text-left">
            {/* Header section boundary block */}
            <div className="modal-header-div flex justify-between items-center pb-3 border-b border-gray-200">
                <div className="modal-title-div">
                    <p className="modal-title text-xl font-bold text-red-600">
                        Confirm Action
                    </p>
                </div>
                <div className="modal-close-div">
                    <button 
                        type="button"
                        onClick={onClose}
                        className="size-8 flex justify-center items-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
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
                <div className="bg-red-50/50 border border-red-100 rounded-lg p-3 mt-1">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                        <span className="text-red-600 font-bold mr-1.5">Target:</span> 
                        {eventTitle || "Untitled Event"}
                    </p>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                    This modification cannot be undone. The schedule entry will be stripped from your active calendar records immediately.
                </p>
            </div>

            {/* Confirmation Controls footer bar */}
            <div className="modal-buttons-div flex justify-end gap-3 pt-3 border-t border-gray-200">
                <button 
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all font-semibold text-sm"
                >
                    CANCEL
                </button>
                <button 
                    type="button"
                    onClick={() => onConfirmDelete(eventId)}
                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all font-bold text-sm shadow-sm"
                >
                    CONFIRM DELETE
                </button>
            </div>
        </div>
    );
};

export default DeleteEvent;