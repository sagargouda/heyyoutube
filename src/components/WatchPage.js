import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {closeMenu, toggling} from "../store/toggleSlice";
import CommentsContainer from "./CommentsContainer";

function WatchPage(props) {

    const [searchParams] = useSearchParams()
    // console.log(searchParams.get('v'))


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( closeMenu())
    }, []);

    return (
        <div className="flex flex-col">
            <div className="px-5">
                <iframe width="500" height="500" src={"https://www.youtube.com/embed/" + searchParams.get('v')}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            <CommentsContainer/>
        </div>


    );
}

export default WatchPage;