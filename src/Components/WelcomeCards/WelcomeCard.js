import React from "react";
import {CardButton, CardContainer, CardH1, CardImage, CardSection, CardWrapper} from "./StyledCards";
import Tilt from 'react-vanilla-tilt';
import searchGif from '../../Assets/images/animat-search-color.gif';
import profileGif from '../../Assets/images/j.gif';
import {makeStyles} from "@material-ui/core/styles";
import Radium from "radium";

import CardActionArea from '@material-ui/core/CardActionArea';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({

    threeDCSS: {
        transformStyle: "preserve-3d",
        transform: "prespective(1000px)",
        display: "flex",
        flexWrap: 'nowrap',
        alignItems: 'center',
        maxHeight: '550px',
        padding: '30px',

        '@media (max-width: 700px)': {
            height: theme.spacing(50),
            transition: 'all 0.4s ease-in',
        },
        '@media (max-width: 400px)': {
            height: theme.spacing(40),
            transition: 'all 0.4s ease-in',
            maxWidth: theme.spacing(35),
        },
    },

    imageStyle1: {
        transform: 'translateZ(125px)',
        height: theme.spacing(20),
        width: theme.spacing(23),
        borderRadius : '100px',
        '@media (max-width: 400px)': {
            height: theme.spacing(18),
            width: theme.spacing(18),

        },


    },

    imageStyle2: {
        transform: 'translateZ(125px)',
        height: theme.spacing(20),
        width: theme.spacing(23),
        borderRadius : '100px',

        '@media (max-width: 400px)': {
            height: theme.spacing(18),
            width: theme.spacing(18),

        },
    },

}));


function WelcomeCard() {
    const classes = useStyles();
    return (
        <>
            <CardContainer>
                <CardWrapper>
                    <CardActionArea>
                        <Tilt style={{
                            width: '350px',
                            padding: '30px',
                            margin: '10px',
                            background: '#1d1d1d',
                            borderRadius: '4px',
                            color: '#fff',
                            fontSize: '16px',
                            lineHeight: 1.6,
                            border: '7px solid #00d2ff',
                        }} className={classes.threeDCSS}>
                            <CardSection>
                                <CardImage>
                                    <img className={classes.imageStyle1} src={searchGif} alt="Search"/>
                                </CardImage>
                                <CardH1>
                                    Search Open-Source Tools..
                                </CardH1>
                                <CardButton
                                    variant="contained"
                                    startIcon={<SearchIcon/>}
                                >
                                    Search
                                </CardButton>
                            </CardSection>
                        </Tilt>
                    </CardActionArea>
                    <CardActionArea>
                        <Tilt style={{
                            width: '350px',
                            padding: '30px',
                            margin: '10px',
                            background: '#1d1d1d',
                            borderRadius: '4px',
                            color: '#fff',
                            fontSize: '16px',
                            lineHeight: 1.6,
                            border: '7px solid #00d2ff',
                        }} className={classes.threeDCSS}>
                            <CardSection>
                                <CardImage>
                                    <img className={classes.imageStyle2} src={profileGif} alt="Profile"/>
                                </CardImage>
                                <CardH1>
                                    Create your Pioneer Profile
                                </CardH1>
                                <CardButton
                                    variant="contained"
                                    endIcon={<CreateIcon/>}
                                >
                                    Create
                                </CardButton>
                            </CardSection>
                        </Tilt>
                    </CardActionArea>
                </CardWrapper>
            </CardContainer>
        </>
    );
}

export default Radium(WelcomeCard);
