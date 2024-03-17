import React from 'react';
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

function Body(props) {
    return (
        <div className="flex " >
            <Sidebar/>
            <MainContainer/>
        </div>
    );
}

export default Body;