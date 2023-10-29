import React from "react"
import ReactPlayer from 'react-player'

function Video() {


      
    return(
            <center>

            <ReactPlayer 
            url={'/assets/Alain_Terrieur.mp4'}
            playing
            muted
            loop
            width={'100%'}
            height={'750px'}
            
            />

            </center>
    )
}

export default Video