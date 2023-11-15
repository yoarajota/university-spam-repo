import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Main from "./components/Main";
import { BooksProvider } from "./contexts/BooksContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BooksProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </ChakraProvider>
    </BooksProvider>
  );
}

export default App;
