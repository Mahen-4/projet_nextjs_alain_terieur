import { Box, Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"


function Pub() {


      
    return(
           <Box bg={'#f9af92'} width={'1350px'} marginTop={'50px'} borderRadius={'40px'} p={'10'} marginBottom={100}>
            <Stack maxW={'4xl'} py={8} as={Stack} spacing={12}>
                <Heading marginLeft={350} width={700}>Envie de rénover votre Extérieur ?</Heading>
                <Heading marginLeft={420}>Contactez Alex Terrieur ! </Heading>
                    <Stack>
                        <Text bgColor={"white"} marginLeft={150} height={175} width={1000} fontSize={'2xl'} padding={5} borderRadius={15}>
                        Mon frère, Alex Terrieur, se consacre à Terrieur Extérieurs. Ils transforment vos espaces extérieurs en havres de paix. Un jardin, une terrasse, une façade : ils donnent vie à vos rêves en plein air.
                        </Text>
                    </Stack>
            </Stack>
           </Box>
    )
}

export default Pub