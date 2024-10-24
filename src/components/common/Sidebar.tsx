import { Avatar, Drawer, List, Stack, Toolbar, useMediaQuery, useTheme, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import colorConfigs from "../../configs/colorConfigs";
import Logo from "../../assets/images/home_picture.jpeg";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import "../../App.css";
import { useState } from "react";

const Sidebar = () => {
    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/aricansena/", "_blank");
    };
    const handleGitHubClick = () => {
        window.open("https://github.com/aricansena", "_blank");
    };
    const handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/sena-arican-3896b2200/", "_blank");
    };
    const handleTwitterClick = () => {
        window.open("https://www.linkedin.com/in/sena-arican-3896b2200/", "_blank");
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <div className="flex">
            {isMobile && (
                <IconButton onClick={toggleSidebar} sx={{
                    position: "absolute",
                    margin: "2px",
                    color: colorConfigs.sidebar.bg,
                    "&:hover": {
                        backgroundColor: colorConfigs.sidebar.bg,
                        color: colorConfigs.sidebar.color
                    }
                }}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            )}
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={open}
                onClose={toggleSidebar}
                sx={{
                    display: "flex",
                    width: "300px",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: "300px",
                        boxSizing: "border-box",
                        borderRight: "0px",
                        backgroundColor: colorConfigs.sidebar.bg,
                        color: colorConfigs.sidebar.color
                    }
                }}
            >
                <List
                    disablePadding
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    <Toolbar >
                        <Stack
                            sx={{ width: "100%" }}
                            direction="column"
                            justifyContent="center"
                        >
                            <Avatar src={Logo} sx={{
                                height: "100%",
                                width: "100%",
                                marginTop: "10px"
                            }} />
                            <h3 style={{ marginTop: "30px", textAlign: "center" }}>Sena ARICAN</h3>
                        </Stack>
                    </Toolbar>
                    <div>
                        {
                            appRoutes.map((route, index) => (
                                route.sidebarProps ? (
                                    <SidebarItem item={route} key={index} />
                                ) : null
                            ))
                        }
                    </div>
                    <div
                        className="socialmedia"
                        style={{
                            marginTop: "auto",
                            textAlign: "center",
                            fontSize: "26px"
                        }}
                    >
                        <AiOutlineLinkedin className="socialmedia-icon" onClick={handleLinkedinClick} />
                        <FaGithubSquare className="socialmedia-icon" onClick={handleGitHubClick} />
                        <SlSocialTwitter className="socialmedia-icon" onClick={handleTwitterClick} />
                        <FaInstagram className="socialmedia-icon" onClick={handleInstagramClick} />
                    </div>

                </List>
            </Drawer>
        </div>
    );
};

export default Sidebar;
