import React, { FC } from 'react'

const ThankYou: FC = () => {
    return (
        <section className='h-[80vh]'>
            <div className='container flex flex-col items-center justify-center space-y-8 h-full'>
                <h1 className='text-3xl '>Thank You!</h1>
                <p className='text-lg max-w-[80%] text-center'>
                    Thank you for getting in touch! We appreciate you contacting us. Our Customer Service Representative will get back to you soon! Have a great day!
                </p>

            </div>
        </section>
    )
}

export default ThankYou