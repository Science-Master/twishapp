import React from 'react'
import FlickHouse from '../components/FlickHouse'
import PayChat from '../components/PayChat';
import TwishCard from '../components/TwishCard';
import TwishBusiness from '../components/TwishBusiness';
import NetworkGroups from '../components/NetworkGroups';
import PublicEye from '../components/PublicEye';

function Services() {
  return (
    <div className=''>
      <div className="sm:grid grid-cols-2 mt-28 overscroll-auto md:overscroll-contain">
        {/* Importing components to be rendered on the page */}
          <div className='pt-[4vh] justify-center items-center '><FlickHouse/></div>
          <div className='pt-[4vh] justify-center items-center '><PayChat/></div>
          <div className='pt-[4vh] justify-center items-center '><TwishCard/></div>
          <div className='pt-[4vh] justify-center items-center '><TwishBusiness/></div>
          <div className='pt-[4vh] justify-center items-center '><NetworkGroups/></div>
          <div className='pt-[4vh] justify-center items-center '><PublicEye/></div>
      </div>
    </div>
  )
}

export default Services;