import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 370;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
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
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

                <Toolbar>
                    <div className="navTop">
                        <svg class="outoff-page"> <defs><linearGradient id="yello_linear" x1=".5" x2="102.5" y2="79" gradientUnits="userSpaceOnUse"><stop stop-color="#1B91FF"></stop><stop offset="1" stop-color="#9F49E3"></stop></linearGradient></defs> </svg>
                        <div class="nav__left">
                            <div class="nav__logo">
                                <a aria-label="ScoopWhoop" href="/?ref=nav_list">
                                    <svg width="92" height="68" fill="none">
                                        <path d="M2.581 68l-.608-7.96-.634-8.235c-.175-2.28-.347-4.562-.515-6.844L.5 40.688v-.296l6.73-1.065c.295 6.709.585 13.4.868 20.076.235.044.304-.054.316-.27.162-3.098.33-6.193.5-9.286.194-3.598.394-7.197.603-10.796a.58.58 0 0 1 .023-.092l9.616-1.525 1.126 20.04.29-.024c.29-6.796.579-13.575.885-20.38l6.75-1.075c-.043.617-.083 1.21-.127 1.804a5139.52 5139.52 0 0 0-.413 5.53c-.16 2.122-.319 4.244-.475 6.366l-.405 5.474c-.155 2.095-.311 4.19-.47 6.286-.063.846-.13 1.694-.179 2.54 0 .214-.084.282-.29.311-2.894.453-5.789.912-8.683 1.377l-1.737.267-.935-20.052-.29.03-.99 20.375-2.188.35-7.584 1.187c-.24.038-.478.098-.718.145L2.581 68z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M91.5 43.228c-.073.593-.128 1.166-.22 1.741-.074.413-.17.821-.29 1.223-.46 1.59-1.618 2.415-3.068 2.916a20.481 20.481 0 0 1-3.48.73l-.822.133v5.207l-6.947 1.1V28.335l1.818-.297c2.426-.385 4.854-.769 7.286-1.15a8.94 8.94 0 0 1 3.184-.03c.44.07.852.261 1.195.551.344.29.604.67.756 1.098.292.815.467 1.67.518 2.537 0 .136.035.273.052.412.014 3.924.02 7.848.018 11.772zm-7.865.846c.176-.027.33-.042.48-.075a.645.645 0 0 0 .454-.237.679.679 0 0 0 .151-.498V33.91v-.297a.501.501 0 0 0-.161-.41.472.472 0 0 0-.418-.11c-.17 0-.338.051-.515.078l.009 10.903z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M36.047 34.743v11.38l.978-.15V34.588l6.933-1.1v27.919l-6.924 1.098V51.944l-.976.151v10.568l-6.947 1.1v-27.92l6.936-1.1z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M48.236 18.094v-7.9a8.709 8.709 0 0 1 .469-2.83c.579-1.656 1.737-2.748 3.227-3.516a12.889 12.889 0 0 1 4.343-1.243 9.565 9.565 0 0 1 3.288.077c2.046.46 3.184 1.738 3.436 3.886.071.574.108 1.152.11 1.73v14.988a9.643 9.643 0 0 1-.495 3.245c-.614 1.736-1.853 2.86-3.448 3.587a12.659 12.659 0 0 1-6.854 1.104c-1.213-.143-2.316-.573-3.092-1.632a5.289 5.289 0 0 1-.909-2.67c-.049-.49-.06-.985-.063-1.483V18.07l-.012.024zm7.937-1.249v-7.41a2.604 2.604 0 0 0 0-.336c-.026-.22-.075-.433-.339-.478a.496.496 0 0 0-.359.07.518.518 0 0 0-.22.301c-.047.194-.07.394-.066.593V24.42a2.157 2.157 0 0 0 0 .335c.029.22.078.433.35.466a.491.491 0 0 0 .342-.074.513.513 0 0 0 .211-.285c.05-.18.073-.365.07-.552.01-2.498.013-4.99.011-7.476v.012z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M32.379 20.539v-7.9a8.23 8.23 0 0 1 .625-3.22c.654-1.551 1.844-2.551 3.3-3.227a13.03 13.03 0 0 1 6.658-1.172 6.31 6.31 0 0 1 1.357.296c1.633.514 2.475 1.73 2.765 3.388.108.615.164 1.239.168 1.864.011 5.09.011 10.18 0 15.266a9.383 9.383 0 0 1-.49 3.136c-.558 1.602-1.67 2.67-3.114 3.441a12.619 12.619 0 0 1-4.525 1.29 9.473 9.473 0 0 1-3.207-.1c-2.026-.466-3.135-1.673-3.424-3.797a13.238 13.238 0 0 1-.116-1.727c-.014-2.513 0-5.026 0-7.535l.003-.003zm7.934-1.214v-7.417a2.614 2.614 0 0 0 0-.338c-.026-.22-.075-.43-.338-.474a.499.499 0 0 0-.36.072.521.521 0 0 0-.22.301 2.313 2.313 0 0 0-.063.594v14.833a2.57 2.57 0 0 0 0 .335c.032.22.084.43.353.46a.488.488 0 0 0 .357-.086.512.512 0 0 0 .202-.314c.048-.18.07-.366.066-.552.006-2.468.007-4.94.003-7.414z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M60.81 44.768v-7.562a9.526 9.526 0 0 1 .475-3.166c.58-1.658 1.737-2.75 3.222-3.521a12.808 12.808 0 0 1 4.342-1.246 9.562 9.562 0 0 1 3.288.074c2.027.45 3.184 1.73 3.445 3.877.071.574.108 1.152.11 1.73v15.014a9.567 9.567 0 0 1-.5 3.246c-.612 1.712-1.833 2.83-3.408 3.56a12.651 12.651 0 0 1-6.927 1.13c-1.213-.145-2.316-.593-3.085-1.643a5.338 5.338 0 0 1-.895-2.608c-.05-.472-.064-.952-.067-1.427-.003-2.486-.003-4.972 0-7.458zm6.948-1.122v7.4a3.176 3.176 0 0 0 0 .334c.026.229.066.457.353.493a.497.497 0 0 0 .37-.085.52.52 0 0 0 .209-.324 2.37 2.37 0 0 0 .052-.555V36.114a2.568 2.568 0 0 0 0-.335c-.026-.22-.073-.434-.339-.478a.494.494 0 0 0-.36.068.515.515 0 0 0-.219.3c-.046.18-.067.366-.064.552 0 2.478.002 4.953.006 7.425h-.008z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M44.956 47.275v-7.9a8.28 8.28 0 0 1 .623-3.22c.654-1.551 1.844-2.551 3.303-3.227a13.03 13.03 0 0 1 6.657-1.187c.463.048.919.148 1.36.297 1.63.513 2.476 1.726 2.765 3.385.11.624.166 1.258.168 1.892.012 5.07.012 10.14 0 15.21a9.452 9.452 0 0 1-.49 3.163c-.558 1.605-1.67 2.685-3.11 3.444a12.617 12.617 0 0 1-4.525 1.291 9.467 9.467 0 0 1-3.208-.098c-2.026-.469-3.137-1.676-3.427-3.797a13.238 13.238 0 0 1-.119-1.727v-7.535l.003.009zm7.935-1.243v-7.396a3.23 3.23 0 0 0 0-.336c-.03-.22-.076-.433-.339-.477a.496.496 0 0 0-.359.069.518.518 0 0 0-.22.298 2.309 2.309 0 0 0-.064.594v14.833a2.568 2.568 0 0 0 0 .336c.032.22.081.43.35.462a.494.494 0 0 0 .343-.072.514.514 0 0 0 .213-.284c.047-.18.07-.365.067-.551.006-2.496.009-4.988.009-7.477z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M71.052 23.235v5.195l-6.947 1.1V1.603l2.503-.403c2.206-.35 4.409-.704 6.615-1.045a9.002 9.002 0 0 1 3.152-.03c.453.074.877.272 1.228.574.35.302.613.697.76 1.141.286.79.45 1.62.484 2.46.046.84.058 1.679.06 2.519v8.968a13.534 13.534 0 0 1-.419 3.406 4.268 4.268 0 0 1-.91 1.78c-.438.511-.99.906-1.608 1.15a13.59 13.59 0 0 1-3.378.87l-1.54.243zm0-16.785v10.887c.156-.023.29-.038.443-.065a.655.655 0 0 0 .482-.238.691.691 0 0 0 .157-.524V7.298c0-.94-.127-1.05-1.027-.89a.314.314 0 0 0-.047.042h-.008z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M.83 29.273l6.658-1.057v3.991c0 .252.08.465.364.51a.533.533 0 0 0 .368-.077.556.556 0 0 0 .232-.303c.045-.162.067-.33.066-.498v-3.053a1.231 1.231 0 0 0-.18-.766 1.184 1.184 0 0 0-.604-.489 16.433 16.433 0 0 0-1.893-.537 15.474 15.474 0 0 1-2.672-.89c-1.329-.593-1.989-1.69-2.281-3.08a3.374 3.374 0 0 1-.081-.637c0-2.05-.188-4.112.124-6.15.382-2.507 1.815-4.19 4.082-5.12a12.947 12.947 0 0 1 6.102-.962c2.255.193 3.743 1.647 4.035 3.984.08.742.118 1.488.116 2.234.017 1.074 0 2.148 0 3.264l-6.664 1.065V16.97a2.579 2.579 0 0 0 0-.336c-.029-.21-.09-.406-.33-.462a.532.532 0 0 0-.337.05.551.551 0 0 0-.242.246 1.653 1.653 0 0 0-.104.57v3.026c-.026.287.042.575.193.818s.376.428.64.526a7.96 7.96 0 0 0 1.338.403c1.061.22 2.102.536 3.109.944 1.285.522 2 1.513 2.316 2.836.104.445.159.9.165 1.359.02 1.427.029 2.857 0 4.287-.032 1.62-.391 3.144-1.39 4.45a7.093 7.093 0 0 1-3.531 2.373 13.171 13.171 0 0 1-5.002.724 6.796 6.796 0 0 1-1.685-.315c-1.621-.522-2.455-1.759-2.759-3.405a10.795 10.795 0 0 1-.165-1.754c-.002-1.329.012-2.664.012-4.037z" fill="url(#yello_linear)">
                                        </path>
                                        <path d="M24.346 25.128l6.924-1.1c0 .088.02.157.02.228v4.483a8.224 8.224 0 0 1-.668 3.32c-.677 1.524-1.87 2.5-3.309 3.192a12.955 12.955 0 0 1-4.37 1.136 9.305 9.305 0 0 1-2.895-.104c-2.044-.427-3.22-1.688-3.523-3.812-.073-.48-.112-.965-.116-1.451V15.249a8.349 8.349 0 0 1 .622-3.246c.66-1.563 1.856-2.566 3.326-3.242a13.03 13.03 0 0 1 6.63-1.166 6.33 6.33 0 0 1 1.36.296c1.63.514 2.475 1.727 2.767 3.386.103.578.158 1.165.165 1.753.023 1.448 0 2.895 0 4.343v.223l-6.933 1.091v-4.236a2.525 2.525 0 0 0 0-.365c-.032-.202-.095-.392-.333-.418a.46.46 0 0 0-.32.047.477.477 0 0 0-.215.25c-.07.2-.107.412-.113.625v14.932c-.002.14.007.28.026.418.032.196.113.365.33.392.1.02.205.006.296-.042a.455.455 0 0 0 .205-.222c.079-.197.12-.408.121-.62v-3.979l.003-.34z" fill="url(#yello_linear)">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <ul class="nav__lists">
                                <li class="nav__list ">
                                    <a aria-label="ScoopWhoop Trending" class="nav-trend" href="/?ref=nav_top">TRENDING
                                    </a>
                                </li>
                                <li class="nav__list ">
                                    <a aria-label="ScoopWhoop Video" class="nav-watch" href="/watch/?ref=nav_top">VIDEOS
                                    </a>
                                </li>
                                <li aria-label="ScoopWhoop Stories" class="nav__list is-active">
                                    <a class="nav-read" href="/read/?ref=nav_top">STORIES
                                    </a>
                                </li>
                                <li class="nav__list ">
                                    <a aria-label="ScoopWhoop Quizzes" class="nav-play" href="/play/?ref=nav_top">QUIZZES
                                    </a>
                                </li>
                                <li class="nav__list ">
                                    <a aria-label="ScoopWhoop MEMES" class="nav-laugh" href="/laugh/?ref=nav_top">MEMES
                                    </a>
                                </li>
                                <li class="nav__list">
                                    <a aria-label="ScoopWhoop Spotlight" class="nav-spotlight" href="/spotlight/?ref=nav_top">SPOTLIGHT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav__right"></div>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >

                        <MenuIcon />

                    </IconButton>
                </Toolbar>
            </AppBar>
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
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
export default Navbar