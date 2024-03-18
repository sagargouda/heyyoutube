import React, {useEffect} from 'react';
import {YOUTUBE_VIDEO_API} from "../utils/constants";
import {useState} from "react";
import VideoCard  from "./VideoCard";
import {Link} from "react-router-dom";

function VideoContainer(props) {

    const [ videos , setVideos ]= useState([])

    useEffect(() => {
        getVideos()
    }, []);


    async function getVideos(){
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        // console.log(json)
        setVideos(json.items)
    }



    return (<div className=" mx-auto flex flex-wrap justify-center">
            {
                videos.map((video)=>{
                    return <Link key={video.id} to={"/watch?v="+video.id}> <VideoCard  info={video}/></Link>
                })
            }

        </div>
    );

}






export default VideoContainer;