import React from 'react'
import "./header.css";
import Bgheader from '../../Assets/styles/images/bg.jpg'

export default function Header(){
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={ Bgheader} alt=""/>
    </div>
  )
}
