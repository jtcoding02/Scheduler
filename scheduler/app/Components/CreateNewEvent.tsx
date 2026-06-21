"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import '.././globals.css';
import '../Styling/style.css';
import mockEventData from '../Data/MockEventData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close'

const CreateNewEvent = (userid:number, id:number) => {

    return(
        
        <div className="modal-div flex flex-col min-w-[35rem]">
            <div className="modal-header-div flex justify-between p-2 items-center">
                <div className="modal-title-div">
                    <p className="modal-title">
                        Create New Event
                    </p>
                </div>
                <div className ="modal-close-div">
                    <button 
                        
                        className="size-10 flex justify-center items-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md" 
                        title="Close Panel"
                    >
                        <CloseIcon className="size-6" />
                    </button>
                </div>
            </div>
            <div className = "modal-content-div">
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
            </div>
        </div>
    )
}