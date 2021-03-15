import React from "react";
import {ProfileContainer, ProfileBody, BackDrop1, BackDropUltraH1} from "./CustomComponents";

function MyProfile() {
    return (
        <>
           <ProfileContainer>
               <ProfileBody>
                   <BackDrop1>
                       {'<profile>'}
                   </BackDrop1>
                   <BackDropUltraH1>
                        Pioneer
                   </BackDropUltraH1>
               </ProfileBody>
           </ProfileContainer>
        </>
    );
}

export default MyProfile;
