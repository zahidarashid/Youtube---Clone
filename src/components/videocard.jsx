import '../styles/videos.css'
const VideoCard = (Props) => {
    let video = Props.data
    let removeVideo = Props.remove
    return (

        <div className='videos'>
            {video.map((data) => {
                return (
                    <div className="video_lists">
                        <img src={data.thumbnail} alt="" />
                        <h4 className="title">{data.title}</h4>
                        <p className="details">{data.channelName}</p>
                        <div className='btn'>
                            <p className="details1">{data.views}M views</p>
                            <button className="p" onClick={() => removeVideo(data.id)}>Not Intrested</button>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

export default VideoCard;