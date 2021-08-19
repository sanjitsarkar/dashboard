import React from 'react'
import './stat_card.scss'
const StatCard = ({title,count,color,icon}) => {
    return (
        <div className="card" style={{backgroundColor:color}}>
            <i className={icon}></i>
            <div className="right">
                <h2>{count}</h2>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default StatCard
