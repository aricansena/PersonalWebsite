import { Box } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import "../../css/HomePage.css"
const HomePage = () => {
    return (
        <div className="flex-row mt-5">
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        md: "50%",
                    },
                    height:
                    {
                        xs: "47%",
                        md: "50%",
                        lg: "60%",
                        xl: "75%"
                    },
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
            </Box>
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        md: "50%",
                    },
                    height:
                    {
                        xs: "47%",
                        md: "50%",
                        lg: "60%",
                        xl: "75%"
                    },
                    color: colorConfigs.sidebar.color,
                    bgcolor: colorConfigs.sidebar.bg,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                    padding: "25px"
                }}
            >
                Bilgisayar Mühendisi Web Developer
            </Box>
        </div>
    );
};

export default HomePage;
