import React from 'react'
import './header.scss'
const Header = ({toggleSideBar}) => {
   
    return (
        <div className="header">
            <div className="menu" onClick={()=>{toggleSideBar()}}><i className="fa fa-bars" aria-hidden="true"></i></div>
            <div className="search_bar">
                <input type="text" placeholder="Search..."/>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                    <div className="badge">3</div>

                        <a href="">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a></li>
                    <li>
                    <div className="badge">30</div>
                        
                        <a href="">
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        </a></li>
                    <li><a href="" className="profile" onClick={()=>{}}>
                        <img src="data:image/jpeg;base64,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" alt="profile" srcSet="" />
                        </a>
                       
                        </li>
                       
                </ul>
            </nav>
        </div>
    )
}

export default Header
