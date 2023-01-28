import React from 'react'
import "./sidebar.css"
import postimg1 from '../../Assets/styles/images/post1.jpg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'> ABOUT ME</span>
            <img  src={postimg1} alt='' />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

        </div>
        <div className='sidebarItem'>
           <span className='sidebarTitle'> CATEGORY</span>
           <ul className='sidebarList'>
              <li className='sidebarListItem'>Life</li>
              <li className='sidebarListItem'>Music</li>
              <li className='sidebarListItem'>Style</li>
              <li className='sidebarListItem'>Sports</li>
              <li className='sidebarListItem'>Tech</li>
              <li className='sidebarListItem'>Cinema</li>
           </ul>
        </div>

        <div className='sidebarItem'>
            <span className='sidebarTitle'> FOLLOW US</span>
            <div className='sidebarSocial'>
                    <i className=" sidebarIcon fa-brands fa-facebook-f"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar