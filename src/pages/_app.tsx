import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import WithAction from '@/components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WithAction />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
