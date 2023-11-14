import React from 'react'
import './RightBar.scss'

function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
                <span>Jonh Doe</span>
            </div>
            <div className='buttons'>
            <button>Follow</button>
            <button>Dissmiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
              <p>
              <span>Jonh Doe</span>
              Change thier cover picture
              </p>
               
            </div>
           <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
              <p>
              <span>Jonh Doe</span>
              Change thier cover picture
              </p>
               
            </div>
           <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
              <p>
              <span>Jonh Doe</span>
              Change thier cover picture
              </p>
               
            </div>
           <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
              <p>
              <span>Jonh Doe</span>
              Change thier cover picture
              </p>
               
            </div>
           <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
              <div className='online' />
              <span>Jonh Doe</span>
            </div>
            
          </div>

          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
              <div className='online' />
              <span>Jonh Doe</span>
            </div>
            
          </div>
          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
              <div className='online' />
              <span>Jonh Doe</span>
            </div>
            
          </div>
          <div className="user">
            <div className="userinfo">
            <img src='https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg' alt='' />
              <div className='online' />
              <span>Jonh Doe</span>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default RightBar