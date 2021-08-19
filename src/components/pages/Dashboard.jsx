import React from 'react'
import Header from "../Header"
import Main from '../Main'
import SideBar from "../SideBar"
import  './dashboard.scss'
const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>
            <SideBar/>
            <Main/>
        </div>
    )
}

export default Dashboard
