import { RouteType } from "./config";
import HomePage from "../pages/home/HomePage";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AboutPage from "../pages/About/AboutPage";
import ContactusPage from "../pages/Contactus/ContactusPage";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "homee"
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