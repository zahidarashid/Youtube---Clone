import { useRef } from 'react';
import '../styles/addvideo.css'
import { useNavigate } from 'react-router-dom';
const Addvideo = () => {
    let navigate=useNavigate()
    let title=useRef(null)
    let channelName=useRef(null)
    let thumbnail=useRef(null)
    let views=useRef(null)
    let submit=(e)=>{
        e.preventDefault()
        let data={
          title:  title.current.value,
       channelName: channelName.current.value,
       thumbnail: thumbnail.current.value,
       views: views.current.value
    }
fetch('http://localhost:4000/videoData',{
   method:'Post',
   headers:{'Content-Type':'application/json'} ,
   body:JSON.stringify(data)
})
alert('video added....')
navigate("/")

}
    
    return (
        <div className="addvideo">
            <div className="videodetail">

                <form onSubmit={submit}>
                    <h1>Add Video</h1>
                    <input ref={title} type="text" placeholder='title' />
                    <input ref={channelName} type="text" placeholder='channelName' />
                    <input ref={thumbnail} type="text" placeholder='thumbnail' />
                    <input type="text" placeholder='views'/>
                    <button>Add video</button>

                </form>
            </div>
            <div className="image">
                <img src="https://i.ytimg.com/vi/jIvjA6bSDqQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtB8xlTWR6DZU31lP3tP8hG24jxQ" alt="" />

            </div>
            
        </div>
    );
}

export default Addvideo;