import React from 'react'
import './side_bar.scss'
const SideBar = () => {
    return (
        <div className="side_bar">
            <div className="title">Dashboard Section</div>


            <nav className="side_nav">
            <ul>
                <li><a href="">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span>
                    </a></li>
                <li><a href="">
           <i className="fas fa-stopwatch"></i>
           <span>Transaction History</span>

                    </a></li>
                <li><a href="">
                    <i className="fas fa-comments"></i>
                    <div className="name">Feedbacks
                           <span className="badge">12</span>
                    </div>

                    </a></li>
            </ul>

            </nav>
        </div>

    )
}

export default SideBar
