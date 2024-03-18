import React from 'react';
import Button from "./Button";
function ButtonList(props) {
    return (
        <div className="hidden  md:flex md:flex-wrap md:justify-center ">
            <Button name="All"/>
            <Button name="Kondzilla"/>
            <Button name="World"/>
            <Button name="Kanye West"/>
            <Button name="NF"/>
            <Button name="Make Money "/>
            <Button name="Interviews"/>
            <Button name="Sasha"/>
        </div>
    );
}

export default ButtonList;