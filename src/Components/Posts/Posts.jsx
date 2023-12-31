import React from 'react'
import './Posts.scss'
import Post from '../Post/Post'
const Posts = ({posts}) => {
  return (
    <div className='posts'>
    {posts.map(p=>(
      <Post post={p}/>
    ))}
    </div>
  )
}

export default Posts
