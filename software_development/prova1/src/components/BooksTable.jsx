import { Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import _ from "lodash";
import { useCallback, useContext, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const columns = ["id", "title"];

function handlePickBy(value, key) {
  return columns.indexOf(key) != -1;
}

const BooksTable = () => {
  const { data, setCurrentPage, all, del } = useContext(BooksContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [deleting, setDeleting] = useState([])

  useEffect(() => {
    if (_.isEmpty(data)) {
      all();
    }
  }, [id]);

  const handleDelete = useCallback(
    async (e, id, callback) => {
      e.stopPropagation();
      await del(id);
      callback()
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
          <Button backgroundColor="var(--color-2)">Formulário</Button>
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
              templateColumns={`repeat(${columns.length ? columns.length + 1 : 3
                }, 1fr)`}
              alignItems="center"
            >
              {Object.values(_.pickBy(tr, handlePickBy)).map((td, k) => (
                <GridItem
                  minH="50px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  key={td + k}
                >
                  {td}
                </GridItem>
              ))}
              <GridItem
                w="100%"
                minH="50px"
                zIndex={2} alignItems="center" display="flex" justifyContent="center">
                <Button
                  isLoading={deleting.includes(tr.id)}
                  border="none"
                  variant="outline"
                  onClick={(e) => {
                    setDeleting((prev) => {
                      let clone = _.clone(prev);
                      clone.push(tr.id)
                      return clone;
                    })
                    handleDelete(e, tr.id, () => {
                      setTimeout(() => {
                        setDeleting((prev) => {
                          let clone = _.clone(prev);
                          return clone.filter((i) => i !== tr.id);
                        })
                      }, 100)
                    });
                  }}
                  p="0"
                  minW="20px"
                  h="20px"
                >
                  {!deleting.includes(tr.id) &&
                    <span className="material-symbols-outlined button">
                      delete
                    </span>
                  }
                </Button>
                <Button
                  border="none"
                  variant="outline"
                  onClick={() => {
                    setCurrentPage(tr);
                    navigate("/book/" + tr.id);
                  }}
                  p="0"
                  minW="20px"
                  h="20px"
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
