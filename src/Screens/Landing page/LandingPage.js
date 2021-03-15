import React, {useEffect} from "react";
import {
    LandingContainer,
    LandingSection,
    BackgroundSection,
    Header1,
    ThePara,
    LandingButton,
    ButtonText,
    TextArea,
    Header2,
    Cursor
} from "./StyledLandingElem";
import {makeStyles} from "@material-ui/core/styles";
import Radium from "radium";

const useStyles = makeStyles((theme) => ({}));

function LandingPage() {

    useEffect(() => {
        let cursor = true;
        let speed = 750;
        setInterval(() => {
            if(cursor) {
                document.getElementById('cursor').style.opacity = 0;
                cursor = false;
            }else {
                document.getElementById('cursor').style.opacity = 1;
                cursor = true;
            }
        }, speed);
    });

    const classes = useStyles();
    const HeaderArray1 = "Open-Source".split('');
    const HeaderArray2 = "Pioneer".split('');
    return (
        <LandingContainer id="home">
            <BackgroundSection>

            </BackgroundSection>
            <LandingSection>
                <Header1>
                    Welcome to<br/>
                </Header1>
                <Header2>
                    {HeaderArray1.map((chars, id) => <TextArea key={id}>{chars}</TextArea>)}&nbsp;
                    {HeaderArray2.map((chars, id) => <TextArea key={id}>{chars}</TextArea>)}
                </Header2>
                <ThePara>
                    May the Source() be with you...<Cursor id="cursor"/>
                </ThePara>
                <LandingButton to="nextSection">
                    <ButtonText>
                        Get Started
                    </ButtonText>
                </LandingButton>
            </LandingSection>
        </LandingContainer>
    );
}

export default Radium(LandingPage);
