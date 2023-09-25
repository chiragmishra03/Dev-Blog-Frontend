import React, { useState ,useEffect } from 'react'
import './Home.scss'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'

import axios from 'axios'
import { useLocation } from 'react-router'

const Home = () => {

  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  console.log(search);

  useEffect(()=>{
    const fetchPost = async ()=>{
      const response = await axios.get("/posts" + search);
      setPosts(response.data);
    }
    fetchPost();
  },[search])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}></Posts>
      </div>
    </>
  )
}

export default Home
