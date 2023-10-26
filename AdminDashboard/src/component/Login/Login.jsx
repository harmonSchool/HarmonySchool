import React, { useState } from 'react';
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login= () => {
  const [admin, setAdmin] = useState('');
  const [email, setUseremail] = useState('');
  const [password, setUserassword] = useState('');
  const [message , setMessage] = useState('')
  const navigate = useNavigate()
  // http://localhost:3001/Admin/loginAdmin
  //addAdmin
  console.log(admin);
  const handleSignUpClick = () => {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  };
  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setAdmin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserassword(event.target.value);
  };
  const handelRegister = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/Admin/addAdmin',{admin,password}).then((response)=>{
      console.log('register success',response.data)
      // setUserContext(response.data)
      navigate('/home')
    }).catch((err)=>{
      console.log(err)
    })
  }

const handelLogin = (event) => {
  event.preventDefault();
  axios
    .post('http://localhost:3000/Admin/loginAdmin', { admin, password })
    .then((response) => {
      console.log('welcome', response.data);
      // navigate('/hiii')
      // setUserContext(response.data)

      // dispatch(setUserId(response.data.userId));
      navigate('/home')

    })
    .catch((error) => {
      console.log(error);
      if (error.response && error.response.status === 401) {
        const errorMessage = error.response.data.message;
        if (errorMessage === 'Invalid email or password') {
          console.log(setMessage)
          setMessage('Invalid email or password. Please try again.');
        } else {
          setMessage('An error occurred. Please try again later.');
        }
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    });
};
const handelNavigate = () =>{
  navigate ("/VerifEmail")
}

  

  return (
    <div className='body'>
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#" onSubmit={(event)=>handelRegister(event)}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" className = "InpLogin"onChange={handleEmailChange } />
      
          <input type="password" placeholder="Password" className = "InpLogin" onChange={handlePasswordChange}/>
          <button className='LoginBtn'>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={(event)=>handelLogin(event)}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span> use your account</span>
          <input type="text" placeholder="Name" className = "InpLogin" onChange={handleEmailChange}/>
          <input type="password" placeholder="Password"className = "InpLogin" onChange={handlePasswordChange}/>
           <p className='error-Message' color='red'>{message}</p>
          <a href="#" onClick={handelNavigate}>Forgot your password?</a>
          <button className='LoginBtn'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello,  Admin!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={handleSignUpClick} >
              Sign Up
            </button >
          </div>
        </div>
      </div>
   
    </div>
    </div>
  );
};

export default Login;


