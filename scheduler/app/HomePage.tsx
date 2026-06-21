import React from 'react';
import './globals.css';
import './Styling/style.css';
import TopNavBar from './Components/TopNavBar';
import MenuBar from './Components/MenuBar';
import Calendar from './Components/Calendar';
function HomePage(){
    return (
        /* Later remove overflow-hidden */
        <div className="homepage-div h-screen w-full bg-white flex flex-col overflow-auto">
            <div className = "topnavbar-div w-full flex-shrink-0">
                <TopNavBar />
            </div>
            <div className = "bottom-div flex-1 w-full min-h-0">
                <div className = "calendar-page-div flex-1 w-full h-full">
                {/* <MenuBar/> */}
                    <Calendar/>
                </div>
                <div className = "events-page-div">

                </div>
            </div>
            
        </div>
    );
}

export default HomePage;