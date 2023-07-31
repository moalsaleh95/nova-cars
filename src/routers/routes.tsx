import { About, Homepage, Services } from "../views";
import { Contact } from "../views/Contact";
import ThankYou from "../views/ThankYou/ThankYou";

const viewsUrls: any[] = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        type: "public",
        id: '1'
    },
    {
        path: "/about",
        exact: true,
        component: About,
        type: "public",
        id: '2'
    },
    {
        path: "/services",
        exact: true,
        component: Services,
        type: "public",
        id: '3'
    },
    {
        path: "/services/:id",
        exact: true,
        component: Services,
        type: "public",
        id: '4'
    },
    // {
    //     path: "/services/interrior-cleaning",
    //     exact: true,
    //     component: Services,
    //     type: "public",
    //     id: '5'
    // },
    // {
    //     path: "/services/car-wash",
    //     exact: true,
    //     component: Services,
    //     type: "public",
    //     id: '6'
    // },
    // {
    //     path: "/services/mechanical-maintenance",
    //     exact: true,
    //     component: Services,
    //     type: "public",
    //     id: '7'
    // },
    // {
    //     path: "/services/paint-repair",
    //     exact: true,
    //     component: Services,
    //     type: "public",
    //     id: '8'
    // },
    // {
    //     path: "/services/body-repair",
    //     exact: true,
    //     component: Services,
    //     type: "public",
    //     id: '9'
    // },
    // {
    //     path: "/services/polish-paste",
    //     exact: true,
    //     component: Services,
    //     type: "public",
    //     id: '10'
    // },
    // {
    //     path: "/services/paintless-dent-repair",
    //     exact: true,
    //     component: Services,
    //     type: "public",
    //     id: '11'
    // },
    // {
    //     path: "/services/motor-cleaning",
    //     exact: true,
    //     component: Services,
    //     type: "public",
    //     id: '12'
    // },
    {
        path: "/contact",
        exact: true,
        component: Contact,
        type: "public",
        id: '13'
    },
    {
        path: "/thank-you",
        exact: true,
        component: ThankYou,
        type: "public",
        id: '14'
    }
];

export default viewsUrls;