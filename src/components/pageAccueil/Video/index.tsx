import React from "react"
import ReactPlayer from 'react-player'

function Video() {
    return(
        <div>
            <center>

            <ReactPlayer 
            url={'https://www.youtube.com/watch?v=ZyjT2KyhHEk'}
            playing
            muted
            loop
            width={'100%'}
            height={'750px'}
            
            />

            </center>
        </div>
    )
}

export default Video