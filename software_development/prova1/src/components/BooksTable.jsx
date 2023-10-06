import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import _ from "lodash";
import { useContext, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { useNavigate, useParams } from "react-router-dom";

const columns = ["id", "title"];

const translate = {
  id: "Código",
  title: "Título",
};

function handlePickBy(value, key) {
  return columns.indexOf(key) != -1;
}

const BooksTable = () => {
  const { data, setCurrentPage, all } = useContext(BooksContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (_.isEmpty(data)) {
      all();
    }
  }, [id]);

  return (
    <TableContainer w="80%" maxWidth="30%">
      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((col) => (
              <Th color="var(--color-2)" key={col}>
                {translate[col]}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {!_.isEmpty(data) &&
            data?.map?.((tr, k) => (
              <Tr
                key={tr + k}
                onClick={() => {
                  setCurrentPage(tr);
                  navigate("/book/" + tr.id);
                }}
              >
                {Object.values(_.pickBy(tr, handlePickBy)).map((td, k) => (
                  <Td key={td + k}>{td}</Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BooksTable;
