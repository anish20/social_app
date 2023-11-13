import React from 'react'
import  './Login.scss'

function Login() {
  return (
    <div className="login">
        <div className="cards">
            <div className="left">
                <h1>Hellol World.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aspernatur quis ab, repellendus recusandae quidem quod neque impedit aut nisi libero commodi quae eveniet. At illum quae quas ut obcaecati?</p>
                <span>Don't you have account?</span>
                <button>Register</button>
            </div>
            <div className="right">
              <h1>Login</h1>
              <form>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Passowrd' />
                <button>Login</button>
              </form>
            </div>

        </div>
    </div>
  )
}

export default Login