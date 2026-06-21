"use client"; 
import React, {Component, useState} from 'react';
import './globals.css';
import './Styling/style.css';
import TopNavBar from './Components/TopNavBar';
import MenuBar from './Components/MenuBar';
import Calendar from './Components/Calendar';


function HomePage(){
    // Controls if the entire panel is rendered (X button)
    const [showEventsPanel, setShowEventsPanel] = useState(true);
    // Controls if the panel is wide or narrow (< / > buttons)
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        /* Later remove overflow-hidden */
        <div className="homepage-div h-screen w-full bg-white flex flex-col overflow-auto">
            <div className = "topnavbar-div w-full flex-shrink-0">
                <TopNavBar />
            </div>

            {/* The flex-row layout places Calendar and Sidebar side-by-side */}
            <div className = "calendar-div flex-1 w-full min-h-0 flex flex-row">
                <Calendar/>
                
            </div>
            
        </div>
    );
}

export default HomePage;