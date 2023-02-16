import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseButton } from '../../assets/icons/closeButton.svg';

interface HeroVideo {
    modal?: boolean;
    CloseButton?: any;
}

function HeroVideo() {
    const [modal, setModal] = useState<boolean>(false);

    const openModal = () => {
        setModal(!modal);
    };

  return (
        <div>
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
                    <button onClick={() => openModal()} className="bg-transparent md:bg-black w-[7rem] mt-1 mx-auto hover:bg-[#D81212] text-[#EFC000] font-bold py-2 px-4 rounded-full">
                    <img className='inline' src="https://img.icons8.com/material-rounded/24/FAB005/play--v1.png" alt="" /> Play
                    
                        {modal ? (
                            <>
                            {createPortal(
                            <section className='modal_bg'>
                            <div className='modal_align'>
                                {/* <div className='modal_content'> */}
                                    <CloseButton 
                                        arial-label="Close modal"
                                        className="modal_close"
                                        onClick={()=> openModal()}
                                    />
                                    <iframe
                                        title='NovaCareCare'
                                        className='modal_video_style container h-full'
                                        // style={{width:"90vw", height:"40vh"}}
                                        loading='lazy'
                                        // width="800"
                                        // height="500"
                                        src='https://novacarcare.s3.amazonaws.com/novacarcaredemo.mp4'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                    ></iframe>
                                {/* </div> */}
                            </div>
                        </section>
                        ,document.getElementById("root") as HTMLElement)}
                            
                            </>
                        ) : null}        
                    </button>
                </div>
            </div>  
        </div>      
  )
}

export default HeroVideo;