import React from 'react';

function Video() {
  return (
        <div className='relative flex justify-center -translate-y-[380px] sm:-translate-y-[400px] overflow-hidden'>
            <video className='rounded-[2rem] w-[90%]'
                src={"https://novacarcare.s3.amazonaws.com/novacarcaredemo.mp4"}
                autoPlay
                loop
                muted
                width="100%"
                height="100%"
                />

            <div className='absolute h-full flex flex-col justify-center items-center z-[60]'>
                <p className='text-2xl md:text-4xl md:w-[35rem] text-white font-bold text-center py-1'>History, Purpose <br/> and Usage</p>
                <p className='text-sm md:text-base text-white md:w-[35rem] text-center py-1 px-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis corporis modi itaque facilis.</p>
                <button className="bg-transparent md:bg-black w-[7rem] mt-1 mx-auto hover:bg-[#D81212] text-[#EFC000] font-bold py-2 px-4 rounded-full">
                <img className='inline' src="https://img.icons8.com/material-rounded/24/FAB005/play--v1.png" alt="" /> Play
                </button>
            </div>
        </div>        
  )
}

export default Video;