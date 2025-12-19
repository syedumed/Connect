import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import PostCard from '../components/PostCard'
import RecentMessages from '../components/RecentMessages'


const Feed = () => {

  const [feeds,setFeeds] = useState([])
  const [loading,setLoading] = useState(true)

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData)
    setLoading(false)
  }

  useEffect(()=>{
    fetchFeeds()
  },[])
  return !loading ? (
    
    <div className='h-full py-10 mt-1 xl:pr-5 flex items justify-center start xl:gap-8'>
      {/* "posts bar" */}
      <div className='p-4 space-y-6'>
        {feeds.map((post)=>(
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      {/*"messages bar */}
      <div>
        <div>
          <RecentMessages />
        </div>
      </div>
    </div>
  ): (<Loading />)
}

export default Feed
