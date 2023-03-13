import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { TestimonialStars } from '../TestimonialStars';
import arrow from '../../assets/right.svg'

const CustomerReviewsCarousel = () => {
    const customerReviewsData = [
        {   
            id: "1",
            name: "Ali Aydoğdu",
            review: "Aracımda ortaya çıkan hasarın onarımı ve tarafıma yeni araç temini konusunda şirketinizin sunmuş olduğu hizmet kusursuz olup yardımlarınız için sonsuz teşekkür ederim."
        },
        {   
            id: "2",
            name: "Bahar Ekinci",
            review: "Arabamı hiç şüphem olmadan rahatça güvenip bırakabileceğim çok güzel bir oto servisi. Güler yüzlü ve misafirperver tüm ekibe teşekkür ediyorum."
        },
        {   
            id: "3",
            name: "Salih Kormazer",
            review: "Firma olarak tüm araçlarımız için bakım ve onarım hizmeti alıyoruz. Gerçekten işlerinde çok başarılılar. Güvenle aracınızı teslim edebilirsiniz."
        },
        {   
            id: "4",
            name: "Rıdvan Tancar",
            review: "Müşteri ilişkileri ve ustanın araç hakkında tecrübesi üst düzey gözünüz kapalı aracınızı teslim edebileceğiniz bir servistir."
        }
    ]


    const reviews = customerReviewsData.map(item => {
        const {id , name, review } = item;

        return (
            <div key={id} className='bg-white h-44'>
               <p className='font-semibold text-xl pt-4 px-6'>{name}</p>
               <TestimonialStars />
               <p className='text-sm px-6'>{review}</p>
            </div>
        )
    })
 
  return (
    <div className='rounded-t-md overflow-hidden relative'>  
        <div className='rounded-md relative overflow-hidden px-0' >   
            <OwlCarousel 
                navText=
                {[
                    `<div class='nav-button owl-prev rotate-180'><img class="!w-3" src=${arrow} alt="" /></div>`,
                    `<div class='nav-button owl-next'><img class="!w-3" src=${arrow} alt="" /></div>`
                ]}
                mouseDrag= {false} touchDrag={true}
                stagePadding={0} margin={0} autoplay ={true} merge={true} nav dots={true} slideBy={2} dotsEach={2} loop={true}
                responsive= {
                    {
                        '1':{
                            items: 1
                        },
                        '1025': {
                            items: 2
                        }
                    }
                }
            >  
                {reviews} 
            </OwlCarousel>  
            <div className='triangle absolute top-[10.5rem]'></div>
            <div className='triangle-small absolute'></div>
        </div>  
    </div> 
  )
}

export default CustomerReviewsCarousel