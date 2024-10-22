import { RouteType } from "./config";
import HomePage from "../pages/home/HomePage";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/dashboard",
        element: <DashboardPageLayout />,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon />
        },
        child: [
            {
                index: true,
                element: <DashboardIndex />,
                state: "dashboard.index"
            },
            {
                path: "/dashboard/default",
                element: <DefaultPage />,
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Default"
                }
            }
        ]
    }
];
export default appRoutes