import React from "react";
import '../styles/tittlebar.scss'
import Notification from '../components/icons/NotificationIcon'

interface TittleBarProps{
    name: String,
    avatar : string
}

function TittleBar(props: TittleBarProps){
    return(
       <div className="tittlebar">
           <p className="tittlebar-name">{props.name}</p>
           <div>
               <i><Notification/></i>
               <img src={props.avatar} alt="" />
           </div>
       </div>
    );
}

export default TittleBar