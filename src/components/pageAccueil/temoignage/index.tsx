'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,

}: {
  src: string
  name: string

}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
 
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={'#abe0f2'} width={'1800px'} marginLeft={'170px'} marginTop={'150px'} marginBottom={'150px'} borderRadius={'40px'}>
      <Container maxW={'8xl'} py={10} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Nos Clients Témoignent</Heading>
          <Text>Voici un apperçu des retours suite à nos services</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Rénovation de Carrelage</TestimonialHeading>
              <TestimonialText>
              Alain Terrieur a transformé ma salle de bains en un espace de rêve. Le choix des carreaux, la précision de la pose et l'attention portée aux détails sont vraiment exceptionnels.              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.pravatar.cc/150?img=45'
              }
              name={'Marie-Claire G.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Plomberie</TestimonialHeading>
              <TestimonialText>
              Alain Terrieur Bâtiment a résolu un problème de plomberie persistant dans ma cuisine. Leur équipe professionnelle a su diagnostiquer le problème rapidement et le réparer efficacement
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.pravatar.cc/150?img=34'
              }
              name={'Isabelle R.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Création d'une Nouvelle Pièce</TestimonialHeading>
              <TestimonialText>
              Ils ont su maximiser l'espace disponible et ont géré le projet du début à la fin, du design à la construction. Notre maison est maintenant plus spacieuse et fonctionnelle, et nous les recommandons vivement.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.pravatar.cc/150?img=69'
              }
              name={'Marc et Sophie D.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Électricité</TestimonialHeading>
              <TestimonialText>
              Alain Terrieur a fait un travail remarquable en mettant à jour l'installation électrique, en veillant à ce que tout soit aux normes actuelles
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.pravatar.cc/150?img=68'
              }
              name={'Thomas M.'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
