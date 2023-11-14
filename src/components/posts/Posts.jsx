import React from 'react'
import  './Posts.scss'
import Post from '../post/Post'

function Posts() {
    // Post Temp Data
    const postData=[
        {
            id:1,
            name:"Rajan Singh",
            userId:1,
            profilePic:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            img:"https://images.pexels.com/photos/13566084/pexels-photo-13566084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:2,
            name:"Kamal Singh",
            userId:2,
            profilePic:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            img:"https://images.pexels.com/photos/4628199/pexels-photo-4628199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       
        }
    ]
  return (
    <div className='posts'>
        {postData && postData.map((item,index)=>(
           <Post post={item} key={index} />
        ))}
    </div>
  )
}

export default Posts