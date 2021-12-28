import React from 'react'
import './rightbar.css'

import { Users } from '../../dummyData'
import Online from '../online/Online';


function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/images/gift.png" alt=""/>
                    <span className="birthdayText">
                        <b>ace</b> and <b>3 others</b> have birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/images/ad.jpg" alt=""/>
                 <h4 className="rightbarTitle">Online Friends</h4>
                 <ul className="rightbarFriendList">
                 {Users.map(u=>(
                     <Online key={u.id} user={u}/>
                     ))} 
                </ul>            
            </div>            
        </div>
    )
}

export default Rightbar
