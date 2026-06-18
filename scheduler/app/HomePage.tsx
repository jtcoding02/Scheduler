import React from 'react';
import './globals.css';
import './Styling/style.css';
import TopNavBar from './Components/TopNavBar';
import MenuBar from './Components/MenuBar';
import Calendar from './Components/Calendar';
function HomePage(){
    return (
        <div className="homepage-div h-screen w-screen bg-white">
            <div className = "topnavbar-div">
                <TopNavBar />
            </div>
            <div className = "menu-bar-div">
                {/* <MenuBar/> */}
                <Calendar/>
            </div>
        </div>
    );
}

export default HomePage;