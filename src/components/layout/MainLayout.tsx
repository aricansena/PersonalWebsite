import { Box, Toolbar } from "@mui/material"
import Topbar from "../common/Topbar"
import Sidebar from "../common/Sidebar"
import colorConfigs from "../../configs/colorConfigs"
import { Outlet } from "react-router-dom"
import { CiHeart } from "react-icons/ci";


const MainLayout = () => {
    const handleHeartClick = () => {
        window.open("https://www.tahsinemre.com/", "_blank");
    };

    return (
        <Box sx={{ display: "flex" }}>
            {/* <Topbar /> */}
            <Box
                component="nav"
                sx={{
                    width: "ml-6",
                    flexShrink: 0
                }}
            >
                <Sidebar />
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: "600px",
                    minHeight: "100vh",
                    backgroundColor: colorConfigs.mainBg
                }}
            >
                {/* <Toolbar /> */}
                <Outlet />
            </Box>
            <div style={{
                position: "absolute",
                bottom: "0",
                right: "7px",
                fontSize: "20px",
                cursor: "pointer"
            }}>
                <CiHeart onClick={handleHeartClick} />
            </div>
        </Box>
    )
}

export default MainLayout