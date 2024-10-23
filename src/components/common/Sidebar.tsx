import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import Logo from "../../assets/images/home_picture.jpeg";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import "../../App.css"
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
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sizeConfigs.sidebar.width,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: sizeConfigs.sidebar.width,
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
                                route.child ? (
                                    <SidebarItemCollapse item={route} key={index} />
                                ) : (
                                    <SidebarItem item={route} key={index} />
                                )
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
    );
};

export default Sidebar;
