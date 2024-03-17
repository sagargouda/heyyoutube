import React from 'react';
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer(props) {
    return (
        <div className=" w-8/10">
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
}

export default MainContainer;