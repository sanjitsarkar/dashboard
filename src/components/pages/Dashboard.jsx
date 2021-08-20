import React, { useState } from 'react'
import Header from "../Header"
import Main from '../Main'
import SideBar from "../SideBar"
import  './dashboard.scss'
const Dashboard = () => {
    const [toggle, setToggle] = useState(false)
    const toggleSideBar = () =>{
        setToggle(!toggle)
    }
    return (
        <div className="dashboard">
            <Header toggleSideBar = {toggleSideBar}/>
            {
                toggle &&
            <SideBar/>
}
            <Main/>
        </div>
    )
}

export default Dashboard
