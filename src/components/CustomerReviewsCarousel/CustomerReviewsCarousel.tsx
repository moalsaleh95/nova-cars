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
            name: "Jeff Dahmer",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed dignissimos autem tempora corporis distinctio."
        },
        {   
            id: "2",
            name: "Jeffrey Epstein",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed dignissimos autem tempora corporis distinctio."
        },
        {   
            id: "3",
            name: "OJ Simpson",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed dignissimos autem tempora corporis distinctio."
        },
        {   
            id: "4",
            name: "Homer Simpson",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed dignissimos autem tempora corporis distinctio."
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
                stagePadding={0} margin={0} autoplay ={true} merge={true} nav dots={true} slideBy={2} dotsEach={1} loop={false}
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