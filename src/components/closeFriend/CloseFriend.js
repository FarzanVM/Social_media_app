import React from 'react'
import './closeFriend.css'
import { Avatar } from '@mui/material';

function CloseFriend({user}) {
    return (
        <div>
             <li className="leftbarFriend">
                <Avatar src={user.ProfilePicture}/>
                <span className="leftbarFriendName">{user.Username}</span>
            </li>
        </div>
    )
}

export default CloseFriend
