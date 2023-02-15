import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import React from 'react';

const FaqAccordion = () => {
  const FAQData = [
    {
      id: '1',
      question: 'Can I trust the suppliers Bookperfect works with?',
      answer: 'Bookperfect is highly cautious when choosing our vendors and business partners. This vetting of travel suppliers has given us access to the world’s top trusted vendors and suppliers. In turn, they trust Bookperfect to represent the reputations they have earned and to deliver the same high standard of customer service to our mutual clients. As a trusted travel management provider, we consistently deliver top-level service. We choose to work only with well-known, reliable providers to maintain a high standard of service.'
    },
    {
      id: '2',
      question: 'Are my belongings safe while on the trip?',
      answer: 'While we take all the precautions to ensure your belongings are safe, we are traveling to some exciting destinations that are sometimes home to skilled thieves. Travel insurance is a must; a lockable bag or money belt will also help.'
    },
    {
      id: '3',
      question: 'What is the best way to carry money?',
      answer: 'We recommend having access to money from various sources – cash, cards, and travel money cards are all commonly used.'
    },
    {
      id: '4',
      question: 'Will refrigeration be available for medicines?',
      answer: 'Availability of refrigeration cannot be guaranteed. As a general rule, many of our city hotels provide access to small fridges; however, outside of this, primarily when trekking or in homestay environments, you cannot rely on access to refrigeration. Please be sure to advise Bookperfect if you travel with medication requiring refrigeration.'
    },
    {
      id: '5',
      question: 'What if I get ill or injured on the trip and cannot continue?',
      answer: 'If you must leave the trip early due to illness, we will do whatever we can to get you home or on your onward journey. Your travel insurance, compulsory on all our trips, should cover any costs incurred if illness occurs.'
    }
  ]

  const refs = FAQData.map(()=> {
        return React.createRef<HTMLButtonElement>();
      })


  const handleClosing= (id:string) => {
    const otherRefs = refs.filter(ref => {
      return ref.current?.getAttribute("data-id") !== id;
    });

    otherRefs.forEach(ref => {
      const isOpen = ref.current?.getAttribute("data-open") === "true";

      if (isOpen) {
        ref.current?.click();
    }})
  } 

  const questions= FAQData.map((item, idx) => {

    const { id, question, answer } = item;
    return (
      <Disclosure as="div" className="mt-2" key={id}>
            {({ open }) => (
              <>
                <Disclosure.Button 
                  ref={refs[idx]}
                  data-id={id}
                  data-open={open}
                  onClick={()=> handleClosing(id)}
                  className={`${open ? "bg-white rounded-t-md drop-shadow-2xl pb-0 dark:bg-[#141414]" : "hover:bg-[#F1F1F1] dark:hover:bg-[#141414] dark:hover: rounded-lg"} group py-5 flex w-full justify-between bg-purple-0 px-6 text-left text-sm font-medium text-black focus:text-red dark:bg-[#222222]`}
                  >

                  <span id="quesitonSpan" className={`${open ? "text-[#D81212] bg-white dark:bg-[#141414]" : "text-black dark:text-white"}  dark:group-hover:bg-[#141414] text-lg font-semibold dark:bg-[#222222] `}>{question}</span>

                  <ChevronUpIcon
                    className={`${
                      !open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-500 dark:text-white`}
                  />

                </Disclosure.Button>
                
                <Disclosure.Panel className={`${open ? "bg-white drop-shadow-xl rounded-b-md pt-0 dark:[#141414]" : ""} dark:bg-[#141414] px-6 pb-5 pt-3 text-sm text-gray-500 dark:text-white`}>
                  <Disclosure.Button className={"text-start"}>
                    {answer}
                  </Disclosure.Button>
                </Disclosure.Panel>
              </>
            )}
      </Disclosure>
    )
  })

  return (
      <div className="rounded-2xl bg-[#f9f9f9] dark:bg-[#222222]">
       {questions}
      </div>
  )
}

export default FaqAccordion;