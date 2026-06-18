"use client"; 
import React, {Component, useState} from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AddButtonSVG from '../Assets/AddButton.svg';


const MenuBar = ({month, year} : {month:string, year:string}) => {
    const [selectedMonth, setSelectedMonth] = useState<string>(month);
    const [selectedYear, setSelectedYear] = useState<string>(year);
    const defaultMonth = 'Jun';
    const defaultYear = '2026';
    return (
        <div className="menubar-div flex w-full p-2" >
            <div className = "menubar flex w-full justify-between px-4">
                <div className = "menubar-left">
                    <div className = "datepicker-div flex p2 justify-center items-center text-center font-semibold text-black pr-2 text-[2rem]">
                        {/* <div className="prev-month-div">

                        </div> */}
                        <div className="month-div flex">
                            <p className="month-label pr-2">{defaultMonth}</p>
                            {/* <input type="month" className="month-dropdown text-black" name="month"/>*/}
                        </div> 
                        <div className="year-div flex">
                            <p className="year-label">{defaultYear}</p>
                            {/* <input type="year" className="year-dropdown text-black" name="year"/> */}
                            
                        </div>
                        {/* <div className="next-month-div">

                        </div> */}
                    </div>
                </div>
                <div className = "menubar-right">
                    <div className="create-btn-div">
                        <button className="create-btn p-3 rounded-lg flex bg-[#1532A8] hover:bg-[#324EBE] focus:bg-[#324EBE] justify-center">
                            <div className="create-label-div flex justify-center items-center pr-2">
                                <p className="create-label font-bold text-white text-base ">CREATE</p>
                            </div>
                            <div className="create-logo-div flex justify-center items-center align-center">
                                <Image src={AddButtonSVG} className = "create-logo size-[1rem]"  alt = "Create Event Button Logo" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;