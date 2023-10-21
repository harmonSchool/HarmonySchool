import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div className="Profile-container">
        <div className="body-profile">
            <div className="Profile-Header">
        <img src="https://scontent.ftun20-1.fna.fbcdn.net/v/t39.30808-6/351301663_921930949038293_3489904020458936785_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WrABk5GgaowAX-64iHj&_nc_ht=scontent.ftun20-1.fna&oh=00_AfCLlwAbRJB74hZ3kt3ljWrKlOhafTc5M6JYTb26GH5pfw&oe=6533ECE2" alt=""
          className='Profile-image'/>
        <h1>mohamed</h1>
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