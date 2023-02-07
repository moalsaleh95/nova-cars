import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid';

const Example = () => {
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

  const questions= FAQData.map(item => {

    const { id, question, answer } = item;
    return (
      <Disclosure as="div" className="mt-2" key={id}>
            {({ open }) => (
              <>
                <Disclosure.Button className={`${open ? "bg-white rounded-t-md drop-shadow-2xl pb-0" : "hover:bg-[#F1F1F1] rounded-lg"} py-5 flex w-full justify-between bg-purple-0 px-6 text-left text-sm font-medium text-black focus:text-red focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                  <span className={`${open ? "text-[#D81212] bg-white " : "text-black"} text-lg font-semibold`}>{question}</span>
                  {/* <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-500`}
                  /> */}
                </Disclosure.Button>
                <Disclosure.Panel className={`${open ? "bg-white drop-shadow-xl rounded-b-md pt-0" : ""} px-6 pb-5 pt-3 text-sm text-gray-500`}>
                  {answer}
                </Disclosure.Panel>
              </>
            )}
      </Disclosure>
    )
  })

  return (
    // <div className="w-full max-w-[930px] ">
      <div className="rounded-2xl bg-[#f9f9f9]">
       {questions}
      </div>
    // </div>   
  )
}

export default Example;