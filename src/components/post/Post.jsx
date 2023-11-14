import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import './Post.scss'
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

function Post({post}) {
  const [commentOpen,setCommentOpen]=useState(false)
  // Temp Like
  const liked=false;
  const handleOpenComment=(comment)=>{
    setCommentOpen(comment)
  }
  return (
    <div className='post'>
        <div className='container'>
          <div className="user">
            <div className="userInfo">
              <img src={post.profilePic}  />
              <div className="details">
                <Link to={`/profile/${post.userId}`} style={{textDecoration:'none',color:'inherit'}}>
                  <span className='name'>{post && post.name}</span>
                  
                </Link>
                <span className='date'>1 min ago</span>
              </div>
            </div>
            <MoreVertIcon />
          </div>
          <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt='' />
          </div>
          <div className="info">
            <div className="item">
              {liked? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> }
              
              <span>12 Likes</span>
            </div>
            <div className="item" onClick={()=>handleOpenComment(!commentOpen)}>
              <TextsmsOutlinedIcon  />
              <span>5 Comments</span>
            </div>
            <div className="item">
              <ShareOutlinedIcon />
              <span>Share</span>
            </div>
          </div>
          {commentOpen &&   <Comments />}
         
    </div>
    </div>
  )
}

export default Post;