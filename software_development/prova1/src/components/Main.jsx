import { Box } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookForm from "./BookForm"
import BooksTable from "./BooksTable"

const Main = () => {
    return <Box as="main" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <BrowserRouter>
            <Routes>
                <Route path="/book/:id" element={<BookForm />} />
                <Route index path="*" element={<BooksTable />} />
            </Routes>
        </BrowserRouter>
    </Box >
}

export default Main;