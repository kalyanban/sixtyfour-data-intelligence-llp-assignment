import React, { useState } from 'react';

import MainContent  from '../MainContent';

import { BsToggles } from "react-icons/bs"
import { IoSearch } from "react-icons/io5"
import { FiMonitor } from "react-icons/fi"
import { FaRegCircleQuestion} from "react-icons/fa6"
import { MdCorporateFare } from "react-icons/md" 
import { AiOutlineDollarCircle } from "react-icons/ai"
import { IoMdHeadset, IoMdSettings } from "react-icons/io"
import { FaRegCalendar } from "react-icons/fa6"


import "./index.css"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="home-container">
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button onClick={toggleSidebar} className="close-btn"><BsToggles size={25}/></button>
                <div className='sidebar-icons'>
                    <IoSearch size={25}/>
                    <FiMonitor size={25}/>
                    <FaRegCircleQuestion size={25}/>
                    <FaRegCalendar size={25}/>
                    <MdCorporateFare size={25}/>
                    <AiOutlineDollarCircle size={25}/>
                    <IoMdHeadset size={25}/>
                    <IoMdSettings size={25}/>
                </div>
            </div>
            <MainContent />
        </div>
    )
}
export default Home