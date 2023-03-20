import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { ReactComponent as CarWashIcon } from '../../assets/icons/carWashIcon.svg'
import { ReactComponent as carTransportationIcon } from '../../assets/icons/carTransportationIcon.svg'
import { ReactComponent as carMaintenanceIcon } from '../../assets/icons/carMaintenanceIcon.svg'
import { ReactComponent as carPaintingIcon } from '../../assets/icons/carPaintingIcon.svg'
import { ReactComponent as carWashIcon } from '../../assets/icons/carWashIcon.svg'
import { ReactComponent as bodyRepairIcon } from '../../assets/icons/bodyRepairIcon.svg'
import { ReactComponent as expertiseReportIcon } from '../../assets/icons/expertiseReportIcon.svg'
import CarWashTab from './TabsContent/CarWashTab'
import InterriorCleaningTab from './TabsContent/InterriorCleaningTab'
import MechanicalMaintenanceTab from './TabsContent/MechanicalMaintenanceTab'
import PaintRepairTab from './TabsContent/PaintRepairTab'
import BodyRepairTab from './TabsContent/BodyRepairTab'
import PolishPasteTab from './TabsContent/PolishPasteTab'
import PaintlessDentRepairTab from './TabsContent/PaintlessDentRepairTab'
import MotorCleansingTab from './TabsContent/MotorCleansingTab'
import { tabsData } from '../../lib'




// const tabsData = [
//     {
//         id: '1',
//         name: 'Detaylı İç Temizlik',
//         Icon: CarWashIcon,
//         content: <InterriorCleaningTab />
//     },
//     {
//         id: '2',
//         name: 'Oto Yıkama',
//         Icon: CarWashIcon,
//         content: <CarWashTab />,
//     },
//     {
//         id: '3',
//         name: 'Mekanik Bakım',
//         Icon: carMaintenanceIcon,
//         content: <MechanicalMaintenanceTab />,
//     },
//     {
//         id: '4',
//         name: 'Boya Onarımı',
//         Icon: carPaintingIcon,
//         content: <PaintRepairTab />,
//     },
//     {
//         id: '5',
//         name: 'Kaporta Onarımı',
//         Icon: bodyRepairIcon,
//         content: <BodyRepairTab />,
//     },
//     {
//         id: '6',
//         name: "Pasta Cila",
//         Icon: expertiseReportIcon,
//         content: <PolishPasteTab />,
//     },
//     {
//         id: '7',
//         name: 'Boyasız Göçük Onarımı',
//         Icon: carMaintenanceIcon,
//         content: <PaintlessDentRepairTab />,
//     },
//     {
//         id: '8',
//         name: 'Detaylı Motor Temizlik',
//         Icon: carPaintingIcon,
//         content: <MotorCleansingTab />,
//     },
// ]


// let [categories] = useState({
//     'Roadside assistance': [
//       {
//         id: 1,
//         title: 'Does drinking coffee make you smarter?',
//         date: '5h ago',
//         commentCount: 5,
//         shareCount: 2,
//       },
//       {
//         id: 2,
//         title: "So you've bought coffee... now what?",
//         date: '2h ago',
//         commentCount: 3,
//         shareCount: 2,
//       },
//     ],
//     Popular: [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//         date: 'Jan 7',
//         commentCount: 29,
//         shareCount: 16,
//       },
//       {
//         id: 2,
//         title: 'The most innovative things happening in coffee',
//         date: 'Mar 19',
//         commentCount: 24,
//         shareCount: 12,
//       },
//     ],
//     Trending: [
//       {
//         id: 1,
//         title: 'Ask Me Anything: 10 answers to your questions about coffee',
//         date: '2d ago',
//         commentCount: 9,
//         shareCount: 5,
//       },
//       {
//         id: 2,
//         title: "The worst advice we've ever heard about coffee",
//         date: '4d ago',
//         commentCount: 1,
//         shareCount: 2,
//       },
//     ],
//   })







const ServicesTabs: FC = () => {

    const [activeTab, setActiveTab] = useState(1)


    useLayoutEffect(() => {
       const activeTabFromLocalStorage = localStorage.getItem('activeTab')
       if(activeTabFromLocalStorage){
            setActiveTab(Number(activeTabFromLocalStorage))
       } else {
        localStorage.setItem('activeTab', '1')
        setActiveTab(1)
       }
    } ,
    [])

    
    const handleTabSelect = (e: number) => {
        localStorage.setItem('activeTab', e.toString())
        setActiveTab(e)
        
    }
    
    
    return (
        <div id="services-tabs" className="z-0 -mb-[29rem] md:-mb-[35rem] px-5 md:px-0 -translate-y-[352px] md:-translate-y-[560px]">
            <div className='w-full container pb-16 rounded-[2rem] '>
                <Tab.Group selectedIndex={activeTab}>
                    <Tab.List className="flex w-full h-[152px] md:h-[160px] items-end space-x-1 pt-1 overflow-x-scroll overflow-y-hidden md:overflow-x-visible">
                        <div className='w-full h-[140px] flex items-end bg-[#F1F1F1] rounded-t-lg'>
                            {tabsData.map((tab, index) => {
                                const { name, Icon, id } = tab
                                const isFirst = index === 0
                                const isLast = index === (tabsData.length - 1)
                                return (
                                    <Tab
                                        key={id}
                                        className={({ selected }) =>
                                        (
                                            `w-[100px] md:w-full border-0 flex flex-col justify-center items-center grow-0 shrink-0 md:grow-1 md:shrink-1 md:flex-1 space-y-4 rounded-b-0 py-2.5 px-3 md:px-0 text-sm font-normal leading-5 focus:outline-none 
                                
                                    ${selected
                                                ? 'bg-white text-[#D81212] h-[calc(100%_+_10px)] md:h-[calc(100%_+_20px)] rounded-t-lg  dark:bg-[#141414] dark:text-white'
                                                : 'text-[#222222] bg-[#f1f1f1] dark:bg-[#0b0b0b] dark:text-white text-opacity-30 hover:bg-white/[0.12] h-full'} 
                                    ${isFirst && 'rounded-tl-lg'}
                                     ${isLast && 'rounded-tr-lg'}   `
                                        )
                                        }
                                        onClick={(e: any) => handleTabSelect(index)}
                                    >
                                        <Icon />
                                        <span>
                                            {name}
                                        </span>
                                    </Tab>
                                )
                            })}

                        </div>
                    </Tab.List>
                    <Tab.Panels className="w-full">
                        {tabsData.map((tab, idx) => {
                            const { content } = tab
                            return (
                                <Tab.Panel
                                    key={idx}
                                    className={'min-h-[620px] rounded-b-[20px] md:rounded-b-xl bg-white dark:bg-[#141414] ring-white  focus:outline-none focus:ring-0'}>

                                    {content}

                                </Tab.Panel>
                            )
                        })}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}

export default ServicesTabs