import { Box, Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"


function Description() {


      
    return(
           <Box bg={'#f9af92'} width={'1800px'}  marginTop={'100px'} borderRadius={'40px'} p={'10'}>
            <Stack maxW={'8xl'} py={8} as={Stack} spacing={12}>
                <Heading marginLeft={10}>Qui sommes nous ?</Heading>
                    <Stack>
                        <Text bgColor={"white"} marginLeft={10} height={175} width={1650} fontSize={'2xl'} padding={5} borderRadius={15}>
                            Je m'appelle Alain Terrieur, et je suis le fondateur d'une entreprise de construction bien particulière. Chez Alain Terrieur Bâtiment, nous ne sommes pas une simple entreprise du secteur du bâtiment, nous sommes une famille dédiée à faire de vos rêves une réalité.
                            Lorsque vous faites appel à nos services, vous ne faites pas affaire avec une multinationale impersonnelle, mais avec des artisans passionnés qui prennent à cœur chaque projet, qu'il s'agisse d'une simple rénovation de salle de bains ou d'une transformation complète de votre intérieur.
                        </Text>
                    </Stack>
            </Stack>
           </Box>
    )
}

export default Description