import React from 'react'
import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between item-center gap-12'>
       <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg}/>  
        </div>

        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Latest Launches of the Week</h1>
            <p className='mb-10'>
            Refresh your reading list with this week's exciting new releases in the literary world!
            Whether you're in the mood for heart-pounding thrillers that keep you on the edge of your 
            seat or deeply moving memoirs that offer insights into the human experience, there's 
            something here for every type of reader. Discover stories that will transport you to 
            different worlds, ignite your imagination, and inspire your thoughts. Don't miss out on 
            these latest offerings that are sure to add depth and variety to your reading journey!</p>

            <button className='btn-primary'>Subscribe</button>
            
        </div>
            
        
    </div>
  )
}

export default Banner