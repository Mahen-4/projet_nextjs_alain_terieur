import { Box, Button } from "@chakra-ui/react"
import WithSpeechBubbles from "./temoignage"
import LargeWithLogoCentered from "../footer"
import Carousel from "./carrousel"
import Video from "./Video"
import Description from "./description"
import Link from "next/link"
import Pub from "./pub"


const PageAccueil = () => {
    return(
        <Box>
        {/* <Carousel/> */}
        <Video/>
        <Description/>
        <WithSpeechBubbles/>
        <center>    
        <Link href={'PageService'} >
            <Button backgroundColor='#abe0f2' size={'lg'} width={400} height={75} borderRadius={25} marginBottom={150}>
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