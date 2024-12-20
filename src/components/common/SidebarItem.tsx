import { ListItemButton, ListItemIcon } from '@mui/material';
import { RouteType } from '../../routes/config';
import { Link } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';

type Props = {
    item: RouteType,
    toggleSidebar: () => void
};

const SidebarItem = ({ item, toggleSidebar }: Props) => {
    return (
        item.sidebarProps && item.path ? (
            <ListItemButton
                component={Link}
                to={item.path}
                onClick={toggleSidebar}
                sx={{
                    "&:hover": {
                        backgroundColor: colorConfigs.sidebar.hoverBg
                    },
                    paddingY: "12px",
                    paddingX: "24px"
                }}
            >
                <ListItemIcon sx={{
                    color: colorConfigs.sidebar.color
                }}>
                    {item.sidebarProps.icon && item.sidebarProps.icon}
                </ListItemIcon>
                {item.sidebarProps.displayText}
            </ListItemButton>
        ) : null
    );
};

export default SidebarItem;
