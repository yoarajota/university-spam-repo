import { Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import _ from "lodash";
import { useCallback, useContext, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const columns = ["id", "title"];

function handlePickBy(value, key) {
  return columns.indexOf(key) != -1;
}

const BooksTable = () => {
  const { data, setCurrentPage, all, del } = useContext(BooksContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (_.isEmpty(data)) {
      all();
    }
  }, [id]);

  const handleDelete = useCallback(
    (e, id) => {
      e.stopPropagation();
      del(id);
    },
    [del]
  );

  return (
    <Box display="flex" flexDirection="column" w="80%">
      <Box w="100%" textAlign="center" mb="1em">
        <Heading mb="1em">Livros</Heading>
        <Link
          to="/book"
          onClick={() => {
            setCurrentPage(null);
          }}
        >
          <Button>Formulário</Button>
        </Link>
      </Box>
      <Grid gap={4} templateColumns="repeat(5, 1fr)">
        {!_.isEmpty(data) &&
          data?.map?.((tr, k) => (
            <Grid
              border="1px solid var(--color-1)"
              borderRadius="9px"
              zIndex={1}
              key={tr + k}
              templateColumns={`repeat(${
                columns.length ? columns.length + 1 : 3
              }, 1fr)`}
            >
              {Object.values(_.pickBy(tr, handlePickBy)).map((td, k) => (
                <GridItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  key={td + k}
                >
                  {td}
                </GridItem>
              ))}
              <GridItem w="100%" zIndex={2}>
                <Button
                  border="none"
                  variant="outline"
                  onClick={(e) => {
                    handleDelete(e, tr.id);
                  }}
                  padding="0.3em 0.8em"
                >
                  <span className="material-symbols-outlined button">
                    delete
                  </span>
                </Button>
                <Button
                  border="none"
                  variant="outline"
                  onClick={() => {
                    setCurrentPage(tr);
                    navigate("/book/" + tr.id);
                  }}
                  padding="0.3em 0.8em"
                >
                  <span className="material-symbols-outlined button">edit</span>
                </Button>
              </GridItem>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default BooksTable;
