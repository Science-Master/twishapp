import React from 'react'

const PublicEye = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-3xl text-gray-800 w-[90%] mx-auto h-auto shadow-inner hover:bg-slate-50 sm:h-[29rem] p-6 backdrop-saturate-200 bg-white/70 cursor-pointer">
        <div className='flex justify-center items-center pb-4 font-bold text-lg'>Publish Eye</div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-6 uppercase text-sm sm:'>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Music</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Article</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Journal</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Tract</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Painting</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Photography</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Book</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Photoplay</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Magazine</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Podcast</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Newspaper</span>
            </div>
            <div className='border-2 px-1 border-[#000000] flex items-center justify-center rounded-3xl w-full'>
                <span>Newsletter</span>
            </div>
        </div>
        <div className="flex justify-center px-4  my-8">
            For readers, writers, journalists, musicians, podcasters, researchers, photographers, painters, entertainers, subscribers, preachers etc
        </div>

    </div>
  )
}

export default PublicEye