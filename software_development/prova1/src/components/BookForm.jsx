import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";

const BookForm = () => {
    const { data } = useContext(BooksContext)

    return <Box>
        <Link to="/">
            Voltar
        </Link>

        {id}
    </Box>
}

export default BookForm;