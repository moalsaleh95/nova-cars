import { About, Homepage } from "../views";

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
    }
];

export default viewsUrls;