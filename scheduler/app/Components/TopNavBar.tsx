import React from 'react';
import Image from 'next/image';
import AccountIconSVG from '../Assets/AccountIcon.svg';
import AccountIconPNG from '../Assets/AccountIcon.png';
import Link from "next/link";

//https://dev.to/lada496/two-ways-of-putting-page-navigation-to-all-pages-with-react-routerv6-4hj1

const TopNavBar = () => {
    return (
        <div className = "navbar-div flex w-full h-full min-h-[4rem]" >
            <nav className = "navbar h-full w-full flex p-4 justify-between bg-[#1532A8] items-center">
                <div className="navbar-left h-full flex justify-center items-center">

                    <Link href="../">
                        <div className="navbar-logo-div pr-2 items-center">
                          <div className="navbar-logo p-1">
                            <svg className="logo size-[1.5rem] rounded-xs p-1 bg-[#ff3b9a]" ></svg>
                          </div>
                        </div>
                    </Link>
                    

                    <div className = "navbar-title-div p-1 items-center">
                        <p className = "navbar-title font-bold text-white text-2xl font-serif">SCHEDULER</p>
                    </div>



                    <div className = "navbar-menubar-div pl-[2rem]">
                        <div className = "navbar-menubar justify-center items-center p-2 flex">
                            <ul className="nav-menubar-list flex">
                                <li>
                                    <div className = "navbar-btn-div">
                                    
                                        <Link href="../" className = "navbar-btn flex align-center items-center p-2">
                                            <p className="navbar-btn-txt font-bold font-mono">HOME</p>
                                        </Link> 
                                    </div>
                                </li>
                                
                                <li>
                                    <div className = "navbar-btn-div flex align-center items-center text-center justify-center">
                                    
                                        <Link href="../media"  className = "navbar-btn flex text-center align-center items-center  justify-center p-2">
                                            <p className="navbar-btn-txt flex text-center font-mono font-bold  justify-center">MEDIA</p>
                                        </Link>
                                    </div>
                                </li>
                                
                            </ul>
                            

                        </div>
                    </div>
 
                </div>
                {/* <div className="navbar-middle">
                    <div className = "navbar-menubar-div">
                        <div className = "navbar-menubar justify-center items-center p-2 flex">
                            <div className = "navbar-btn-div">
                                <button className = "navbar-btn p-2">
                                    <p className="navbar-btn-txt ">Home</p>
                                </button>
                            </div>

                            <div className = "navbar-btn-div ">
                                <button className = "navbar-btn p-2">
                                     <p className="navbar-btn-txt">Video</p>
                                </button>
                            </div>

                        </div>
                    </div>
                </div> */}

                <div className="navbar-right">
                    <div className = "navbar-account-div items-center justify-center align-middle flex">
                        <Image src={AccountIconSVG} className = "navbar-account size-[2rem]"  alt = "Account Icon" />
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default TopNavBar;