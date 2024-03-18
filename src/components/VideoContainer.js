import React, {useEffect} from 'react';
import {YOUTUBE_VIDEO_API} from "../utils/constants";
import {useState} from "react";
import VideoCard from "./VideoCard";
function VideoContainer(props) {

    const [ videos , setVideos ]= useState([])

    useEffect(() => {
        getVideos()
    }, []);


    async function getVideos(){
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        console.log(json)
        setVideos(json.items)
    }



    return (<div className=" mx-auto flex flex-wrap justify-center">
            {
                videos.map((video)=>{
                    return  <VideoCard key={video.id} info={video}/>
                })
            }

        </div>
    );

}

export default VideoContainer;