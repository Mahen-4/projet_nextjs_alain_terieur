'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, PhoneIcon  } from '@chakra-ui/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
interface Props {
  children: React.ReactNode
}




export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const [activeMenu, setActiveMenu] = React.useState(false)

  const changeActiveMenu  = (menu_path: string) => {
    router.push(menu_path)
    setActiveMenu(!activeMenu)
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <Image
                src="/logo.jpg"
                width={60}
                height={60}
                alt="Logo"
                style={{borderRadius: "50%"}}
                />
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Button onClick={()=>{changeActiveMenu("/")}} _hover={{ bg: '#abe0f2', color: "black" }} color= {!activeMenu ? '#f9af92' : "black"} variant='ghost'>Accueil</Button>
              <Button onClick={()=>{changeActiveMenu("/pageService")}} _hover={{ bg: '#abe0f2', color: "black" }} color= {activeMenu ? '#f9af92' : "black"} variant='ghost'>Nos Services</Button>
            </HStack>
            <div>
                <div></div>
            </div>
          </HStack>
          <Flex alignItems={'center'}>
            <a href="tel:+900300400"> 
                <Button
                variant={'solid'}
                bg={'#abe0f2'}
                size={'sm'}
                _hover={{bg: "#f9af92"}}
                mr={4}
                leftIcon={<PhoneIcon />}>
                Appelez-nous
                </Button>
            </a>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                <Button onClick={()=>{changeActiveMenu("/")}} _hover={{ bg: '#abe0f2', color: "black" }} color= {!activeMenu ? '#f9af92' : "black"} variant='ghost'>Accueil</Button>
                <Button onClick={()=>{changeActiveMenu("/pageService")}} _hover={{ bg: '#abe0f2', color: "black" }} color= {activeMenu ? '#f9af92' : "black"} variant='ghost'>Nos Services</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}