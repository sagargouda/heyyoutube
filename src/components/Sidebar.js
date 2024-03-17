import React from 'react';
import {useSelector} from "react-redux";

function Sidebar(props) {
    const selector = useSelector(store => store.toggles.toggle)
    return (
        selector && <div className="p-5 shadow-lg w-44">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Account</li>
                <li>Live</li>
            </ul>
            {/* first heading */}
            <h1 className="font-bold">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>Food</li>
            </ul>


            {/* second heading */}
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>Food</li>
            </ul>

        </div>
    )

}

export default Sidebar;