import React from 'react'
import {
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Accordion,
    AccordionHeader,
    Typography,
    AccordionBody,
    Chip,
} from '@material-tailwind/react'
import {
    StarIcon,
    HomeIcon,
    InboxIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const SidebarList = ({requestDilogOpen}) => {
    const [accordionOpen, setAccordionOpen] = React.useState(0);
    const handleOpen = (value) => {
        setAccordionOpen(accordionOpen === value ? 0 : value);
    };
    const handleDilogOpen = () => {
        requestDilogOpen();
    }
  return (
    <div>
            <List>
            <NavLink to="sampletwo">
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Scheduled Events
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                </NavLink>
                <NavLink to="sample">
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Raise Request !
                    </ListItem>
                </NavLink>
                <hr className="my-2 border-blue-gray-50" />
                <NavLink to="profile">
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </NavLink>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem onClick={handleDilogOpen}>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
    </div>
  )
}

export default SidebarList
