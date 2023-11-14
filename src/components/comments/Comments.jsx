import React, { useContext } from 'react';
import './Comments.scss'
import { AuthContext } from '../../context/authContext';

function Comments() {
  const {currentUser}=useContext(AuthContext);

    // Temp Comments
    const commentsData=[
        {
            id:1,
            name:"Rajan Singh",
            userId:1,
            profilePic:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            
        },
        {
            id:2,
            name:"Kamal Singh",
            userId:2,
            profilePic:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
           
        }
    ]
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser && currentUser.profilePic} alt='' />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
        </div>
        {commentsData && commentsData.map((item,index)=>(
            <div className="comment" key={index}>
                <img src={item && item.profilePic} alt="" />
                <div className="info">
                    <span>{item && item.name}</span>
                    <p>{item && item.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments