
import { ReactComponent as CarWashIcon } from '../../assets/icons/carWashIcon.svg'
import { ReactComponent as carTransportationIcon } from '../../assets/icons/carTransportationIcon.svg'
import { ReactComponent as carMaintenanceIcon } from '../../assets/icons/carMaintenanceIcon.svg'
import { ReactComponent as carPaintingIcon } from '../../assets/icons/carPaintingIcon.svg'
import { ReactComponent as carWashIcon } from '../../assets/icons/carWashIcon.svg'
import { ReactComponent as bodyRepairIcon } from '../../assets/icons/bodyRepairIcon.svg'
import { ReactComponent as expertiseReportIcon } from '../../assets/icons/expertiseReportIcon.svg'
import {CarWashTab, InterriorCleaningTab ,MechanicalMaintenanceTab ,PaintRepairTab ,BodyRepairTab ,PolishPasteTab ,PaintlessDentRepairTab ,MotorCleansingTab } from '../../components/ServicesTabs/TabsContent'


const tabsData = [
    {
        id: '1',
        name: 'Detaylı İç Temizlik',
        Icon: CarWashIcon,
        content: <InterriorCleaningTab />
    },
    {
        id: '2',
        name: 'Oto Yıkama',
        Icon: CarWashIcon,
        content: <CarWashTab />,
    },
    {
        id: '3',
        name: 'Mekanik Bakım',
        Icon: carMaintenanceIcon,
        content: <MechanicalMaintenanceTab />,
    },
    {
        id: '4',
        name: 'Boya Onarımı',
        Icon: carPaintingIcon,
        content: <PaintRepairTab />,
    },
    {
        id: '5',
        name: 'Kaporta Onarımı',
        Icon: bodyRepairIcon,
        content: <BodyRepairTab />,
    },
    {
        id: '6',
        name: "Pasta Cila",
        Icon: expertiseReportIcon,
        content: <PolishPasteTab />,
    },
    {
        id: '7',
        name: 'Boyasız Göçük Onarımı',
        Icon: carMaintenanceIcon,
        content: <PaintlessDentRepairTab />,
    },
    {
        id: '8',
        name: 'Detaylı Motor Temizlik',
        Icon: carPaintingIcon,
        content: <MotorCleansingTab />,
    },
]


export default tabsData