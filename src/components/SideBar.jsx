import React,{useEffect, useState} from 'react'
import './side_bar.scss'
const SideBar = ({toggle}) => {
 
    // const [class_name, setClass_name] = useState("side_bar")
    // useEffect(()=>{
    //     if(toggle)
    //     {
    //         setClass_name("side_bar hide")
    //     }
    //     else{
    //         setClass_name("side_bar hide")

    //     }
    //         },[toggle])
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
