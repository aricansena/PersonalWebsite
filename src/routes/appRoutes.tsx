import { RouteType } from "./config";
import HomePage from "../pages/home/HomePage";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangeLogPage from "../pages/changelog/ChangeLogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import AboutPage from "../pages/About/AboutPage";
import { ContactPage } from "@mui/icons-material";
import ContactusPage from "../pages/Contactus/ContactusPage";

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
            },
            {
                path: "/dashboard/analytics",
                element: <AnalyticsPage />,
                state: "dashboard.analytics",
                sidebarProps: {
                    displayText: "Analytics"
                }
            },
            {
                path: "/dashboard/saas",
                element: <SaasPage />,
                state: "dashboard.saas",
                sidebarProps: {
                    displayText: "SaasPage"
                }
            }

        ]
    },
    {
        path: "/changelog",
        element: <ChangeLogPage />,
        state: "changelog",
        sidebarProps: {
            displayText: "ChangeLog",
            icon: <DashboardOutlinedIcon />
        }
    },
    {
        path: "/home",
        element: <HomePage />,
        state: "home",
        sidebarProps: {
            displayText: "Giriş",
            icon: <HomeIcon />
        }
    },
    {
        path: "/about",
        element: <AboutPage />,
        state: "about",
        sidebarProps: {
            displayText: "Hakkında",
            icon: <PersonIcon />
        }
    },
    {
        path: "/contactus",
        element: <ContactusPage />,
        state: "contactus",
        sidebarProps: {
            displayText: "İletişim",
            icon: <EmailIcon />
        }
    }
];
export default appRoutes