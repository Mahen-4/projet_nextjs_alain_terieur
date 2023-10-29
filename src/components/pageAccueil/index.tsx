import { Box, Button } from "@chakra-ui/react"
import WithSpeechBubbles from "./temoignage"
import LargeWithLogoCentered from "../footer"
import Carousel from "./carrousel"
import Video from "./Video"
import Description from "./description"
import Link from "next/link"
import Pub from "./pub"
import { useRouter } from 'next/router'
import React from "react"




const PageAccueil = () => {

    const router = useRouter()

    const [activeMenu, setActiveMenu] = React.useState(false)

    const changeActiveMenu  = (menu_path: string) => {
        router.push(menu_path)
        setActiveMenu(!activeMenu)
    }



    return(
        <Box>
        <Carousel/>
        {/* <Video />*/}
        <Description/>
        <WithSpeechBubbles/>
        <center>    
        <Link href={'PageService'} >
            <Button onClick={()=>{changeActiveMenu("/pageService")}} _hover={{ bg: '#abe0f2', color: "black" }} backgroundColor= {'#f9af92'} variant='ghost' size={'lg'} width={400} height={75} borderRadius={25} marginBottom={150}>
                    Découvrez nos service !
            </Button>
        </Link>
        </center>
        <Pub/>
        <LargeWithLogoCentered/>
        </Box>
    )
}

export default PageAccueil