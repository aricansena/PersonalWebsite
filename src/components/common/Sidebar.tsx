import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import Logo from "../../assets/images/home_picture.jpeg"

const Sidebar = () => {
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
                    backgroundColor: colorConfigs.sidebar.bg
                }
            }}
        >
            <List disablePadding>
                <Toolbar>
                    <Stack
                        sx={{ width: "100%" }}
                        direction="row"
                        justifyContent="center"
                    >
                        <Avatar src={Logo} />
                    </Stack>
                </Toolbar>
            </List>
        </Drawer>
    );
};

export default Sidebar