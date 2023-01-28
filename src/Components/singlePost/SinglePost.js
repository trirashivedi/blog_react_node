import React from 'react'
import './singlePost.css'
import singleImg from '../../Assets/styles/images/singlepost.jpg'

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img className='singlePostImg' src={singleImg} alt="" />
             <h1 className='singlePostTitle'> Single Post Title
             <div className='singlePostEdit'>
             <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash"></i>
             
             </div>
             </h1>

             <div className='singlePostInfo'>
                <span className='singlePostAuthor'> Author: <b>Rashi</b></span>

                <span className='singlePostDate'> 1 hour ago</span>

                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
             </div>
        </div>
    </div>
  )
}

export default SinglePost