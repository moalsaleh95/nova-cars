import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseButton } from '../../assets/icons/closeButton.svg';
import { ReactComponent as LoadingIcon } from '../../assets/icons/loading-icon.svg';

interface HeroVideo {
    modal?: boolean;
    CloseButton?: any;
}

function HeroVideo() {
    const [modal, setModal] = useState<boolean>(false);
    const [videoLoading, setVideoLoading] = useState(false);

    const openModal = () => {
        setModal(!modal);
        setVideoLoading(true)
    };

    const spinner = () => {
        setVideoLoading(false);
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
                    <p className='text-2xl md:text-4xl md:w-[35rem] text-white font-bold text-center py-1'>Profesyonel Araç < br/>Bakım Merkezi</p>
                    <p className='text-sm md:text-base text-white md:w-[35rem] text-center py-1 px-8'>Araçlarınızın mekanik bakım ve onarım ihtiyaçlarını bir arada karşılıyor, aracınızı memnuniyet garantisi ile teslim ediyoruz.</p>
                    <button onClick={() => openModal()} className="bg-black md:bg-black w-[7rem] mt-1 mx-auto hover:bg-[#D81212] text-[#EFC000] font-bold py-2 px-4 rounded-full">
                        <img onClick={() => setVideoLoading(!videoLoading)} className='inline' src="https://img.icons8.com/material-rounded/24/FAB005/play--v1.png" alt="" /> Play

                        {modal ? (
                            <>
                                {createPortal(
                                    <section className="modal__bg">
                                        <div className="modal__align">
                                            <div className="modal__content">
                                                <CloseButton
                                                    className="modal__close"
                                                    arial-label="Close modal"
                                                    onClick={() => openModal()}
                                                />
                                                <div className="modal__video-align">
                                                    {videoLoading ? (
                                                        <div className="modal__spinner">
                                                            <LoadingIcon
                                                                className="modal__spinner-style"
                                                            />
                                                        </div>
                                                    ) : null}
                                                    <video
                                                        id='videoPlayer'
                                                        className="modal__video-style"
                                                        onLoad={() => spinner()}
                                                        src="https://novacarcare.s3.amazonaws.com/novacarcaredemo.mp4"
                                                        title="Nova Car Care"
                                                        controls
                                                        loop
                                                        autoPlay
                                                        width="100%"
                                                        height="100%"
                                                    ></video>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    , document.getElementById("root") as HTMLElement)}
                            </>
                        ) : null}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroVideo;