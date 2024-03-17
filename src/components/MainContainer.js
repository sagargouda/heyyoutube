import React from 'react';
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer(props) {
    return (
        <div>
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
}

export default MainContainer;