import { Box } from "@mui/material";
import Topbar from "../common/Topbar";
import Sidebar from "../common/Sidebar";
import colorConfigs from "../../configs/colorConfigs";
import { Outlet } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const MainLayout = () => {
    const handleHeartClick = () => {
        window.open("https://www.tahsinemre.com/", "_blank");
    };

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                background: "linear-gradient(to left, #1e2a39, #fff)",
            }}
        >
            {/* <Topbar /> */}
            <Box
                component="nav"
                sx={{
                    width: "ml-6",
                    flexShrink: 0,
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
                cursor: "pointer",
                color: 'white'
            }}>
                <CiHeart onClick={handleHeartClick} />
            </div>
        </Box>
    );
}

export default MainLayout;
