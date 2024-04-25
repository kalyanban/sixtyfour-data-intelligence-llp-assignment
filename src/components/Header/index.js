import { Component } from "react"

import "./index.css"

import { SlCalender } from "react-icons/sl"
import { FaRegClock } from "react-icons/fa6"
import { MdNotificationsNone } from "react-icons/md"

class Header extends Component {
    render() {
        const currDate = new Date().toLocaleDateString();
        const currTime = new Date().toLocaleTimeString();
        return (
            <div className="header">
                <div className="header-container">
                    <div className="name-container">
                        <h1 className="name">Hello, Kalyan</h1>
                        <p className="name-text">
                            You are subscribed to Retail plan.
                        </p>
                    </div>
                    <div className="date-time-container">
                        <div className="date-container">
                            <SlCalender size={25}/>
                            <p className="date">{currDate}</p>
                        </div>
                        <div className="time-container">
                            <FaRegClock size={25}/>
                            <p className="time">{currTime}</p>
                        </div>
                    </div> 
                    <MdNotificationsNone size={25}/>
                </div>   
            </div>
        )
    }
}
export default Header