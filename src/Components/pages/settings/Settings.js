import React from 'react'
import './settings.css'
import Sidebar from '../../sidebar/Sidebar';
import SettingImage from '../../../Assets/styles/images/seetng.jpg';


const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>

        <form className='settingsForm'> 
           <label> Profile Picture</label>
            <div className='settingsPP'>
            <img className="settingsImg" src={SettingImage} alt="" />

            <label htmlFor='fileInput'>
            <i className=" settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type='file' id='fileInput' style={{display:"none"}} />    
           </div>

           <label>Username</label>
           <input className='' type="text" placeholder='rashi'/>

           <label>Email</label>
           <input className='' type="text" placeholder='trivedi.rashi95@gmail.com'/>

           <label>Password</label>
           <input className='' type="password" />

           <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings