import React from 'react'
import {Link} from 'react-router-dom'
import './Register.scss'

function Register() {
  return (
    <div className="register">
    <div className="cards">
        
       <div className="left">
            <h1>Social App.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aspernatur quis ab, repellendus recusandae quidem quod neque impedit aut nisi libero commodi quae eveniet. At illum quae quas ut obcaecati?</p>
            <span>Do you have account?</span>
            <Link to={"/login"}>
                <button>Login</button>
                </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
          <input type='text' placeholder='Name' />
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Passowrd' />
            <button>Register</button>
          </form>
        </div>
        
    </div>
</div>
  )
}

export default Register