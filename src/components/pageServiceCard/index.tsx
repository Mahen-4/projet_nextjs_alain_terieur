'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,

  } from '@chakra-ui/react'
import React from 'react'


export default function ProductSimple(props:{image:string, title:string, categorie:string, description:any}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const IMAGE = props.image
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {props.categorie}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {props.title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
          <Button
            onClick={() => onOpen()}
            key="sm"
            m={4}
            >voir plus</Button>
            <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{props.title}</DrawerHeader>
                <DrawerBody>
                <Image
                    rounded={'lg'}
                    height={330}
                    width={582}
                    src={IMAGE}
                    alt="#"
                />
               <p dangerouslySetInnerHTML={{ __html: props.description }} style={{marginTop: "2%"}} />
               <Button margin={"5% 0 0 25%"} bg={"#abe0f2"}>Simulation de Devis</Button>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}