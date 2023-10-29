import { Box } from "@chakra-ui/react"
import WithSpeechBubbles from "./temoignage"
import LargeWithLogoCentered from "../footer"
import Carousel from "./carrousel"
import Video from "./Video"
import Description from "./description"


const PageAccueil = () => {
    return(
        <Box>

        {/* <Carousel/> */}
        <Video/>
        <Description/>
        <WithSpeechBubbles/>
        <LargeWithLogoCentered/>
        </Box>
    )
}

export default PageAccueil