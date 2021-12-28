import React from 'react'
import './online.css'
import { Avatar } from '@mui/material';

function Online({user}) {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <Avatar src={user.ProfilePicture}/>
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarFriendName">{user.Username}</span>
            </li>
              
            
        </div>
    )
}

export default Online
