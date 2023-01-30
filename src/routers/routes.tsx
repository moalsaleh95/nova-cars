import { Homepage } from "../views";

const viewsUrls: any[] = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        type: "public"
    }
];

export default viewsUrls;