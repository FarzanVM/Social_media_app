import React from 'react'
import './post.css'
import PropTypes from 'prop-types'
import { Rating ,} from '@mui/material'
import { Avatar } from '@mui/material';
import {MoreVert} from '@mui/icons-material'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect } from 'react';

function Post({post}) {

    const [opencomment,setOpenComment]=useState(false)
    const [comment,setComment] = useState("")
    const [commentCount,setCommentCount] = useState(post.comment)
    const [isCommented,setIsCommented] = useState(false)
    const [loading,setLoading] = useState(true)
    const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon />,
          label: 'Very Satisfied',
        },
      };

      function IconContainer(props){
          const {value, ...others} = props 
          return <span { ...others}>{customIcons[value].icon}</span>
      }

      IconContainer.propTypes={
        value: PropTypes.number.isRequired,
      }

      function commentBox(){
          setOpenComment(!opencomment)
       
      }
      function addComment(e){
          if(e.key === 'Enter')
          {
             setCommentCount(isCommented? commentCount-1:commentCount+1);
             setIsCommented(!isCommented);
          }
      }
      

    const [like, setLike] = useState(post.like)
    const [isLiked,setIsLiked]=useState(false)
    const [users,setUsers] = useState(null)

    const clickHandler = () =>{

        setLike(isLiked ? like - 1 : like + 1 )
        setIsLiked(!isLiked)
    }
    useEffect(() => {
        fetch('https://backend-api.farzanvm.workers.dev/api/posts')
        .then(res =>{
            return  res.json();
        })
            .then(data =>{
                setUsers(data);
                setLoading(false);
                
            }
            )
    },[])
    
    if(loading) return <h1>Loading...</h1>

    return (users &&
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Avatar src={ users.Users.filter(u=>u.id===post.userId)[0]?.ProfilePicture}/>
                        <span className="postUsername">{users.Users.filter(u=>u.id===post.userId)[0]?.Username}</span>
                        <span className="postTime">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="spaceText">{post.desc}</span>
                    <img className="postImg" src={post.photo} alt="one_piece"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon"  src="/assets/images/like.png" onClick={clickHandler} alt=""/>
                        <img className="likeIcon" src="/assets/images/heart.png" onClick={clickHandler} alt=""/>
                        <span className="postlikeCounter">{like} people liked</span>
                        <button className="buttonComment" onClick={commentBox}><span> Add comment</span></button>
                                       
                    </div>
                    <div className="postIcons">
                    <Rating
                        name="highlight-selected-only"
                        defaultValue={2}
                        IconContainerComponent={IconContainer}
                        sx={{ fontSize: 140 }}
                        highlightSelectedOnly
                            />
                    </div>
                    
                    
                    <div className="postBottomRight">
                        <span className="postCommentText">{commentCount} comments</span>
                    </div>
                    
                    
                </div>
                {opencomment && (<div id="commentboxed" className="commentBox">
                        <Avatar src={ users.Users.filter(u=>u.id===1)[0]?.ProfilePicture}/>
                        <span className="postUsername">{users.Users.filter(u=>u.id===1)[0]?.Username}</span>
                        <input type="text" className="postCommentArea"  value={comment} onChange={(e)=>setComment(e.target.value)}
                         onKeyDown={(e)=>addComment(e)} ></input>
                        <CloseIcon></CloseIcon>
                        </div> )}  

            </div>
            
        </div>
    )
}

export default Post
