import React from 'react';

function Video() {
  return (
        <div className='relative flex justify-center'>
            <video className='heroVideo w-[90%]'
                src={"https://novacarcare.s3.amazonaws.com/novacarcaredemo.mp4"}
                autoPlay
                loop
                muted
                width="100%"
                height="100%"
                />

            <div className='heroText flex flex-col justify-center z-[60]'>
                <p className='text-4xl w-[35rem] text-white font-bold text-center py-1'>History, Purpose <br/> and Usage</p>
                <p className='text-white w-[35rem] text-center py-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis corporis modi itaque facilis.</p>
                <button className="bg-black w-[7rem] mt-1 mx-auto hover:bg-[#D81212] text-[#EFC000] font-bold py-2 px-4 rounded-full">
                <img className='inline' src="https://img.icons8.com/material-rounded/24/FAB005/play--v1.png" alt="" /> Play
                </button>
            </div>
        </div>        
  )
}

export default Video;