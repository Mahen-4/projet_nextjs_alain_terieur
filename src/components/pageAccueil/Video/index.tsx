import React from "react"
import ReactPlayer from 'react-player'
 

function Video(props:{url:string}) {
  return (
    <div>
        <center>
            <ReactPlayer 
            url={props.url}
            playing
            muted
            loop
            width={'100%'}
            height={'750px'}
            />
 
        </center>
    </div>
  );
}


export default Video;