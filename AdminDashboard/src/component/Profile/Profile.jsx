import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div className="Profile-container">
        <div className="body-profile">
            <div className="Profile-Header">
       
        <h1>oubayid</h1>
        </div>
        <hr />
        <div className='upadate-container'>
        <h1>Upadate Your Profile</h1>
      <input type="file" />
        <input type="text"  placeholder='upadate your name ...'/>
        <button>Send</button>
        </div>
        </div>
      
    </div>
  )
}

export default Profile