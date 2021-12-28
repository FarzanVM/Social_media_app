import React from 'react'
import './blog.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Feed from '../Feed/Feed';
import Rightbar  from '../Rightbar/Rightbar';
import Leftbar from '../Leftbar/Leftbar';

function Blog() {
    return (
        <>
            
            <div className="topbarContainer">
                Instagram
                <input className="searchBar" type="search" placeholder="Search..."/>
                <SearchIcon fontSize="large"/>
                <AccountCircleIcon className="accountCircle" fontSize="large"/>                
            </div>
            <div className="homeContainer">
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div>
            
        </>
    )
}

export default Blog
