import { VFC } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { RecoilRoot } from 'recoil'
import { Router } from './router/Router'

const App: VFC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ChakraProvider>
          <h1>
            <Link to="/">Functional Programing Practice</Link>
          </h1>
          <Router />
        </ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
