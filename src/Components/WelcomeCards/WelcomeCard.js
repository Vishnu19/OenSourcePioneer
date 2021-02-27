import React from "react";
import {CardContainer, CardH1, CardImage, CardSection, CardWrapper} from "./StyledCards";


function WelcomeCard() {
    return (
        <>
            <CardContainer>
                <CardWrapper>
                    <CardSection>
                        <CardImage>
                            <CardH1>
                                Search Open Source
                            </CardH1>
                        </CardImage>
                    </CardSection>
                    <CardSection>
                        <CardImage>
                            <CardH1>
                                Create your Pioneer Account
                            </CardH1>
                        </CardImage>
                    </CardSection>
                </CardWrapper>
            </CardContainer>
        </>
    );
}

export default WelcomeCard;
