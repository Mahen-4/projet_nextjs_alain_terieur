import { Box, Button } from "@chakra-ui/react"
import WithSpeechBubbles from "./temoignage"
import Carousel from "./carrousel"
import Video from "./Video"
import Description from "./description"
import Link from "next/link"
import Pub from "./pub"
import { useRouter } from 'next/router'
import React from "react"




const PageAccueil = () => {




    return(
        <Box>
        <Carousel/>
        {/* <Video />*/}
        <div style={{display: "flex", flexDirection: 'column', justifyContent:'center', alignItems: "center"}}>
            <Description/>
            <WithSpeechBubbles/>         
            <Pub/>
        </div>
        
        </Box>
    )
}

export default PageAccueil