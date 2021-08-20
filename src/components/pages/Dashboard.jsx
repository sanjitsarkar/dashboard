import React, { useEffect, useState } from 'react'
import Header from "../Header"
import Main from '../Main'
import SideBar from "../SideBar"
import  './dashboard.scss'
const Dashboard = () => {
    const [toggle, setToggle] = useState(true)
    const [matches, setMatches] = useState(true)
    useEffect(()=>{
        const handler = e => setMatches(e.matches);
        window.matchMedia("(max-width: 900px)").addListener(handler);
        return ()=>{
            window.matchMedia("(max-width: 900px)").removeEventListener()
        }
    },[])

    useEffect(()=>{
         if(!matches)
         setToggle(false)
         else
         setToggle(true)
    },[matches])
    const toggleSideBar = () =>{
        if(matches)
        setToggle(!toggle)
    }
    return (
        <div className="dashboard">
            <Header toggleSideBar = {toggleSideBar}/>
          {
              !toggle &&
            <SideBar/>
          }
            <Main/>
        </div>
    )
}

export default Dashboard
