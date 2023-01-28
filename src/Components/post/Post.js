import React from 'react'
import './post.css'
import postImgg from '../../Assets/styles/images/postimg1.jpg'

const Post = () => {
  return (
    <div className='post'>
        <img className="postImg"  src={postImgg } alt="" />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <div className='postTitle'>
               Post for the forest 
           </div>
           <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        
    </div>
  )
}

export default Post