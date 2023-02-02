import React, { FC, useState } from 'react'
import { Tab } from '@headlessui/react'
import {ReactComponent as  CarWashIcon}  from '../../assets/icons/carWashIcon.svg'
import {ReactComponent as  carTransportationIcon }  from '../../assets/icons/carTransportationIcon.svg'
import {ReactComponent as  carMaintenanceIcon }  from '../../assets/icons/carMaintenanceIcon.svg'
import {ReactComponent as  carPaintingIcon }  from '../../assets/icons/carPaintingIcon.svg'
import {ReactComponent as  carWashIcon }  from '../../assets/icons/carWashIcon.svg'
import {ReactComponent as  bodyRepairIcon }  from '../../assets/icons/bodyRepairIcon.svg'
import {ReactComponent as  expertiseReportIcon }  from '../../assets/icons/expertiseReportIcon.svg'
import CarWashTab from './TabsContent/CarWashTab'




const tabsData = [
    {
        id: '1',
        name: 'Roadside Assistance',
        Icon: carTransportationIcon,
        content:'Roadside Assistance'
    },
    {
        id: '2',
        name: 'Car Wash',
        Icon: CarWashIcon,
        content: <CarWashTab />,
    },
    {
        id: '3',
        name: 'Machanical Maintenance',
        Icon: carMaintenanceIcon,
        content: 'Machanical Maintenance',
    },
    {
        id: '4',
        name: 'Paint Repair',
        Icon: carPaintingIcon,
        content: 'Paint Repair',
    },
    {
        id: '5',
        name: 'Body Repair',
        Icon: bodyRepairIcon,
        content: 'Body Repair',
    },
    {
        id: '6',
        name: 'Expertise Report',
        Icon: expertiseReportIcon,
        content: 'Expertise Report',
    },
    {
        id: '7',
        name: 'Mechanical Maintenance',
        Icon: carMaintenanceIcon,
        content: 'Mechanical Maintenance',
    },
    {
        id: '8',
        name: 'Paint Repair',
        Icon: carPaintingIcon,
        content: '',
    },
]


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
    
      return (
        <div className="container w-full py-16 bg-[#f1f1f1] ">
                <Tab.Group defaultIndex={1}>
                    <Tab.List className="flex w-full h-[140px] space-x-1 rounded-xl bg-[#F1F1F1] pt-1 overflow-x-scroll">
                    {tabsData.map((tab) => {
                        const {name, Icon, id} = tab
                        return (
                        <Tab
                            key={id}
                            className={({ selected }) =>
                                (
                                `w-[100px] md:w-full border border-b-0 md:border-0 flex flex-col justify-start items-center grow-0 shrink-0 md:grow-1 md:shrink-1 md:flex-1 space-y-4  rounded-t-lg rounded-b-0 py-2.5 px-3 md:px-0 text-sm font-normal leading-5 focus:outline-none
                               
                                ${selected
                                    ? 'bg-white text-[#D81212]'
                                    : 'text-[#222222] bg-[#f1f1f1] text-opacity-30 hover:bg-white/[0.12] first-line:' } `
                                )
                            }
                            >
                            <Icon />
                            <span>
                                {name}
                            </span>
                        </Tab>
                    )})}
                    </Tab.List>
                    <Tab.Panels className="w-full ">
                    {tabsData.map((tab, idx) => {
                        const { content } = tab
                        return (
                            <Tab.Panel
                            key={idx}
                            className={'min-h-[620px] rounded-b-xl bg-white p-3 ring-white  focus:outline-none focus:ring-0'}>
                        
                                {content}
                            
                            </Tab.Panel>
                    )})}
                    </Tab.Panels>
                </Tab.Group>
            </div>
      )
}

export default ServicesTabs