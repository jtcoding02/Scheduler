import React from 'react';
import Image from 'next/image';
import '.././globals.css';
import '../Styling/style.css';
import AccountIconSVG from '../Assets/AccountIcon.svg';
import AccountIconPNG from '../Assets/AccountIcon.png';
import TopNavBar from './Components/TopNavBar';

interface MediaPageProps{
    
}

function MediaPage(){
    return(
        <div className="media-page-div h-screen w-full bg-white flex flex-col overflow-auto">
            <div className="media-page">
                <div className = "topnavbar-div w-full flex-shrink-0">
                    <TopNavBar />
                </div>
                <div className="media-header-div">
                    <div className="media-header">
                        <p className="media-title font-bold p-4 text-3xl">Media</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaPage;