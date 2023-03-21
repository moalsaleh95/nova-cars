import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import React from 'react';

const FaqAccordion = () => {
  const FAQData = [
    {
      id: '1',
      question: 'Pasta Cila Nedir ?',
      answer: 'Bir aracın boyasını daha parlak gösteren, ufak çizikleri kamufle eden işleme pasta cila denir. Çünkü aynı model, aynı özellik ve aynı renkteki iki otomobilden biri pasta cila işlemi nedeniyle daha yeni görünebilir.'
    },
    {
      id: '2',
      question: 'Seramik Kaplamadan Sonra Araç Hemen Kullanılabilir Mi?',
      answer: '48 Saatlik bir süre zarfı içerisinde araca herhangi bir sıvı temas etmesini tavsiye etmediğimizden dolayı yağmurlu havalarda bu süreyi doldurmadan kullanmamanızı öneririz.'
    },
    {
      id: '3',
      question: 'Motor Temizleme Nasıl Yapılır?',
      answer: 'Motor temizleme işleminde önce çok amaçlı konsantre temizleyiciler ile motor yağı, toz ve kirden arındırılarak temizlenir. Daha sonra kirin nüfuz etmesini zorlaştıran ve motora parlaklık veren özel motor ve plastik aksam koruyucu ile kaplanır. Motor özel malzemeler ile koruma altına alınır.'
    },
    {
      id: '4',
      question: 'Motor Koruma Nedir?',
      answer: 'Motor aracın çalışmasını sağlayan en hayati parçadır. Bu nedenle motor koruma hizmetleri aracın sorunsuz çalışması için gerekli olan bakım hizmetlerini sunmaktadır. Motor koruma uygulaması ile kirin nüfuz etmesini zorlaştıran ve motora parlaklık veren özel motor ve plastik aksam koruyucu ile kaplanır. Motor özel malzemeler ile koruma altına alınır.'
    },
    {
      id: '5',
      question: 'Jant Temizliği Nasıl Yapılır?',
      answer: 'Araç jant temizliği işlemine başlanmadan önce aracın tüm tekerlekleri özenle yıkanır. Jant temizliği ve bakım hizmetinde jantlar özel kimyasallar ve aparatlar ile detaylı olarak temizlenir. Parlatma spreyi ve jant cilası kullanılarak ilk günkü parlaklığında kavuşturulur. Aynı zamanda zamanla biriken kirlerin uzun bir süre boyunca daha kolay bir şekilde temizlenmesi sağlanmış olur.'
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
    const defaultOpen = (idx === 1 ?  true :  false);
    
    return (
      <Disclosure defaultOpen={defaultOpen} as="div" className="mt-2" key={id}>
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