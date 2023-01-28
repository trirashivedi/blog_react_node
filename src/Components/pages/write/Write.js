import React from 'react'
import './write.css'
import writeimg from '../../../Assets/styles/images/write.jpeg'


const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src={writeimg} alt="" />
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input className='' type='file' id='fileinput' style={{display:"none"}} />
                <input className='writeInput' type='text' placeholder='Title' autoFocus= {true}  />
            </div>
            <div className='writeFormGroup'>
                <textarea  placeholder='Tell your story .......' typeof='text' className='writeInput writeText'></textarea>
            </div>

            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write