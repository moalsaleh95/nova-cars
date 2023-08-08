import React, { FC } from 'react'

const ThankYou: FC = () => {
    return (
        <section className='h-[80vh]'>
            <div className='container flex flex-col items-center justify-center space-y-8 h-full'>
                <h1 className='text-3xl '>Teşekkürler!</h1>
                <p className='text-lg max-w-[80%] text-center'>
                İletişim kurduğunuz için teşekkür ederiz! Bize ulaştığınızı takdir ediyoruz. Müşteri Hizmetleri Temsilcimiz en kısa sürede size dönüş yapacaktır! Harika bir gün geçirin!
                </p>

            </div>
        </section>
    )
}

export default ThankYou