import React from 'react'
import Calender from './Calender'
import DashBoardCard from './DashBoardCard'

import Footer from "./Footer"
import './main.scss'
import ProductStock from './ProductStock'
import Profile from './Profile'
import Revenue from './Revenue'
import Statistics from './Statistics'
const Main = () => {
    return (
        <div className="main">
       <DashBoardCard/>
       <div className="grid">
        <Statistics/>
        <Revenue/>
        </div>
       <div className="grid">
        <ProductStock/>
        <Profile/>
        <Calender/>
        </div>
        <Footer/>
        </div>
    )
}

export default Main