import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LandingPage from "../../Screens/Landing page/LandingPage";
import WelcomeCard from "../WelcomeCards/WelcomeCard";
import Radium from "radium";
import MenuIcon from "@material-ui/icons/Menu";
import {StyledListItemText,CustomListItem} from "./StylesNavBarComponents";
import MyProfile from "../../Screens/Profile/MyProfile";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: '12px',

        '@media (max-width: 700px)': {
            marginRight: '12px',
        },

        '@media (max-width: 600px)': {
            marginRight: '-2px',
        }
    },

    hide: {
        display: 'none',
    },
    drawer: {
        background : 'linear-gradient(#24243e,#000000) repeat',
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        background : '#1d1d1d',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),

        '@media (max-width: 480px)': {
            width: 150,
        }
    },
    drawerClose: {
        background : '#1d1d1d',
        borderRight : '3px solid #3a7bd5',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        height : '6.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
    },

    iconstyle : {
        stroke: "url(#blue-gradient)",

        '&:hover' : {
            stroke: "url(#Darcula)",
        }
    },

}));

function NavBar() {
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

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <svg width="0" height="0">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#00d2ff" offset="0%" />
                        <stop stopColor="#3a7bd5" offset="100%" />
                    </linearGradient>
                </svg>
                <svg width="0" height="0">
                    <linearGradient id="Darcula" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#5c258d" offset="0%" />
                        <stop stopColor="#4389a2" offset="100%" />
                    </linearGradient>
                </svg>
                <div className={classes.toolbar}>
                    {open === false ?
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon className={classes.iconstyle}/>
                    </IconButton>:
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.iconstyle}/> :
                            <ChevronLeftIcon className={classes.iconstyle} />}
                    </IconButton> }
                </div>
                <Divider/>
                <List>

                        <CustomListItem button >
                            <ListItemIcon>
                                <InboxIcon className={classes.iconstyle}/>
                            </ListItemIcon>
                            <StyledListItemText > HOME </StyledListItemText>
                        </CustomListItem>
                    <CustomListItem button >
                        <ListItemIcon>
                            <MailIcon className={classes.iconstyle}/>
                        </ListItemIcon>
                        <StyledListItemText> PROFILE </StyledListItemText>
                    </CustomListItem>

                </List>
                <Divider />

            </Drawer>
            <main className={classes.content}>
                {/*<MyProfile/>*/}
                <LandingPage/>
                <WelcomeCard/>
            </main>
        </div>
    );
}

export default Radium(NavBar);