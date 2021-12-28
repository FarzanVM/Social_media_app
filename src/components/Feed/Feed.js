import React from 'react'
import { useState,useEffect } from 'react'
import './feed.css'
import Share from '../Share/Share'
import Post from '../post/Post'
// import {Posts} from '../../dummyData'
function Feed() {

    const [posts,setPosts] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch('https://backend-api.farzanvm.workers.dev/api/posts')
        .then(res =>{
            return  res.json();
        })
            .then(data =>{
                setPosts(data);
                setLoading(false);
            }
            )
    },[])
     
    if(loading) return <h1>Loading...</h1>
    return (
        <div className="feed">
            <div className="feedWrapper">
               <Share></Share>
               {/* { posts && posts.map((p)=>(
                   <Post key={p.id} post={p}/>
               )
               )} */}
               {posts && posts.Posts.map((p,i) => (<Post key={i} post={p}/>) )}
              
            </div>
        </div>
    )
}

export default Feed

