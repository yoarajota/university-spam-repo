import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Main from './components/Main'
import { BooksProvider } from './contexts/BooksContext'

function App() {
  return (
    <BooksProvider>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </BooksProvider>
  )
}

export default App
