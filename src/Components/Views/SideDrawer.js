import React from 'react'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import CakeIcon from '@material-ui/icons/Cake';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import PetsIcon from '@material-ui/icons/Pets';
import WcIcon from '@material-ui/icons/Wc';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HeadsetIcon from '@material-ui/icons/Headset';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const useStyles = makeStyles((theme) => ({
    drawer: {
        width: "100%",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "100%",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        background:'linear-gradient(155.03deg,#ffb341 -.78%,#ff2272 119.49%)',
        height:"100",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }
}));


const SideDrawer = ({setOpen,open}) => {
    const classes = useStyles();
    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <KeyboardBackspaceIcon />
                </IconButton>
            </div>
            <Divider />
            <h4 className="side-nav__title">Categories</h4>
            <List className="sideBarList">
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="News" />
                    <ListItemIcon className="sideMenuIcons">
                        <AnnouncementIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Entertainment" />
                    <ListItemIcon className="sideMenuIcons">
                        <CakeIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Whats Your Mood" />
                    <ListItemIcon className="sideMenuIcons">
                        <FiberNewIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Humour" />
                    <ListItemIcon className="sideMenuIcons">
                        <EmojiEmotionsIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Opinion" />
                    <ListItemIcon className="sideMenuIcons">
                        <MicIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Food" />
                    <ListItemIcon className="sideMenuIcons">
                        <FastfoodIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Travel" />
                    <ListItemIcon className="sideMenuIcons">
                        <FlightTakeoffIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Women" />
                    <ListItemIcon className="sideMenuIcons">
                        <PregnantWomanIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="LGBTQIA" />
                    <ListItemIcon className="sideMenuIcons">
                        <MobileFriendlyIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Animals" />
                    <ListItemIcon className="sideMenuIcons">
                        <PetsIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Sex & Relationships" />
                    <ListItemIcon className="sideMenuIcons">
                        <WcIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Sports" />
                    <ListItemIcon className="sideMenuIcons">
                        <SportsCricketIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Culture" />
                    <ListItemIcon className="sideMenuIcons">
                        <EmojiEventsIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Men" />
                    <ListItemIcon className="sideMenuIcons">
                        <EmojiPeopleIcon />
                    </ListItemIcon>

                </ListItem>
                <ListItem button>
                    <ListItemText className="sideNav_content" primary="Technology" />
                    <ListItemIcon className="sideMenuIcons">
                        <HeadsetIcon />
                    </ListItemIcon>

                </ListItem>
            </List>
            <Divider />
            <List className='sideBarList'>
                {['About Us', 'Contact Us', 'Advertise with us', 'Careers', 'Privacy Policy', 'Terms & Condition'].map((text, index) => (
                    <ListItem button>

                        <ListItemText className="sideNav_content" primary={text} />
                        <ListItemIcon className="sideMenuIcons"></ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideDrawer
