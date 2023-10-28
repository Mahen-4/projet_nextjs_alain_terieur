import { Box } from "@chakra-ui/react"
import WithSpeechBubbles from "./temoignage"
import LargeWithLogoCentered from "../footer"
import Carousel from "./carrousel"


const PageAccueil = () => {
    return(
        <Box>
        <h1>ACCUEIL</h1>
        <Carousel/>
        <WithSpeechBubbles/>
        <LargeWithLogoCentered/>
        </Box>
    )
}

export default PageAccueil