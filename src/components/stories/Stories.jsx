import React, { useContext } from 'react'
import './Stories.scss'
import { AuthContext } from '../../context/authContext';

function Stories() {
    const {currentUser}=useContext(AuthContext);
    // Temp Stories
    const storyData=[
        {
            id:1,
            name:'Mohd Anish',
            img:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:2,
            name:'Mayank Singh',
            img:"https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:3,
            name:'Rahul Singh',
            img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:4,
            name:'Aman Kumar',
            img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
  return (
    <div className='stories'>
          <div className="story" >
                <img src={currentUser && currentUser.profilePic} alt="" />
                <span>{currentUser && currentUser.name}</span>
                <button>+</button>
            </div>
        {storyData && storyData.map((item,index)=>(
            <div className="story" key={index}>
                <img src={item && item.img} alt="" />
                <span>{item && item.name}</span>
               
            </div>
        ))}
    </div>
  )
}

export default Stories