import { ReactNode } from "react";
import appRoutes from "../../routes/appRoutes";
import { Box } from "@mui/material";

type Props = {
    state?: string,
    children: ReactNode;
};

const PageWrapper = (props: Props) => {
    const route = appRoutes.find(r => r.state === props.state);

    return (
        <Box sx={{ position: "relative" }}>
            {/* {route?.sidebarProps?.displayText && (
                <Box sx={{
                    position: "absolute",
                    top: "10px",
                    left: "25px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#1e2a39"
                }}>
                    {route.sidebarProps.displayText}
                    <Box
                        sx={{
                            height: "4px",
                            backgroundColor: "gold",
                            marginTop: "2px",
                            borderRadius: "2px"
                        }}
                    />
                </Box>
            )} */}
            {props.children}
        </Box>
    );
};

export default PageWrapper;
