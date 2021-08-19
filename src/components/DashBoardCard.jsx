import React from 'react'
import StatCard from './StatCard'

const DashBoardCard = () => {
    return (
        <>
            <h3 className="title">Dashboard</h3>
        <div className="stat_cards">
        <StatCard title="Visits Today" count="1234" icon="fas fa-eye" color="#ff5722"/>
        <StatCard title="New Users" count="934" icon="fas fa-users" color="#03a9f4"/>
        <StatCard title="New Orders" count="7154" icon="fas fa-shopping-bag" color="#3f51b5"/>
        <StatCard title="Total Sales" count="$3134" icon="fas fa-calculator" color="#009688"/>
        </div> 
        </>
    )
}

export default DashBoardCard
