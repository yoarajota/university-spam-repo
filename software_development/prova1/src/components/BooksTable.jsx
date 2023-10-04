import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import _ from "lodash"
import { useContext } from "react"
import { BooksContext } from "../contexts/BooksContext"
import { useNavigate } from 'react-router-dom';

const columns = [
    "id",
    "title",
]

const translate = {
    "id": "Código",
    "title": "Título"
}

function handlePickBy(value, key) {
    return columns.indexOf(key) != -1
}

const BooksTable = () => {
    const { data, setCurrentPage } = useContext(BooksContext)
    const navigate = useNavigate();

    return <TableContainer w="80%" maxWidth="30%">
        <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
                <Tr>
                    {columns.map((col) => <Th fontSize="" color="var(--color-2)" key={col}>{translate[col]}</Th>)}
                </Tr>
            </Thead>
            <Tbody>
                {data && data.map((tr, k) =>
                    <Tr key={tr + k} onClick={() => { setCurrentPage(tr.id); navigate("/book/" + tr.id) }}>{Object.values(_.pickBy(tr, handlePickBy)).map((td, k) =>
                        <Td key={td + k}>
                            {td}
                        </Td>
                    )}
                    </Tr>
                )}
            </Tbody>
        </Table>
    </TableContainer>
}

export default BooksTable;