import React, { useContext } from 'react'
import  './Login.scss'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/authContext';

function Login() {
  const {currentUser,login}=useContext(AuthContext);
  const handleLogin=(e)=>{
    e.preventDefault();
    login();
  }
  return (
    <div className="login">
        <div className="cards">
            <div className="left">
                <h1>Hellol World.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aspernatur quis ab, repellendus recusandae quidem quod neque impedit aut nisi libero commodi quae eveniet. At illum quae quas ut obcaecati?</p>
                <span>Don't you have account?</span>
                <Link to={"/register"}>
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
              <h1>Login</h1>
              <form>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Passowrd' />
               <button onClick={handleLogin}>Login</button>
              
              </form>
            </div>

        </div>
    </div>
  )
}

export default Login