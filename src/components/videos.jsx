import { useEffect, useState } from "react";

import VideoCard from "./videocard";
const Videos = () => {


    let [video, setVideo] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch ('http://localhost:4000/videoData')
            let data = await response.json()
            setVideo(data)

        }
        fetchdata()
    }, [])
    let removeVideo = (id) => {
        setVideo(video.filter(x => x.id !== id))
    }

    return (
        <div>
            <VideoCard data={video} remove={removeVideo} />
            <VideoCard data={video.filter(x => x.views >= 20)} />
        </div>
    );
}

export default Videos;