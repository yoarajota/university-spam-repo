import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import _ from "lodash";
import { useCallback, useContext, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { fromISO8601toYYYYMMDD, isISO8601String } from "../helpers";

const columns = ["title"];
const columnsToQuery = ["title"];

function handlePickBy(_, key) {
  return columns.indexOf(key) != -1;
}

const BooksTable = () => {
  const { data, setCurrentPage, all, del, fetchingAll, book } =
    useContext(BooksContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [deleting, setDeleting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [dataToRender, setDataToRender] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    setDataToRender(data);
  }, [data]);

  useEffect(() => {
    if (_.isEmpty(data)) {
      all();
    }
  }, [id]);

  const handleDelete = useCallback(
    async (e, id, callback) => {
      e.stopPropagation();
      await del(id);
      callback();
    },
    [del]
  );

  const filter = useCallback(() => {
    if (filtering) {
      setDataToRender(
        data?.filter((tr) =>
          columnsToQuery.some((toQuery) =>
            String(tr[toQuery])
              .toLocaleUpperCase()
              .includes(filtering.toLocaleUpperCase())
          )
        )
      );

      return;
    }

    setDataToRender(data);
  }, [data, filtering]);

  const modalValue = useCallback((value) => {
    if (isISO8601String(value)) {
      return fromISO8601toYYYYMMDD(value);
    }

    return value;
  }, []);

  function getDescriptionByName(name) {
    const bookItem = book.find(item => item.name === name);
    return bookItem ? bookItem.description : "Description not found";
  }

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
      <Input
        width="30%"
        margin="1em auto"
        placeholder="Pesquisar"
        type="text"
        onChange={(e) => setFiltering(e.target.value)}
        onBlur={filter}
      />
      {fetchingAll && <Spinner size="xl" margin="0 auto" />}
      <Grid gap={4} templateColumns="repeat(5, 1fr)">
        {!_.isEmpty(dataToRender) &&
          dataToRender.map?.((tr, k) => (
            <Grid
              border="1px solid var(--color-1)"
              borderRadius="9px"
              zIndex={1}
              key={tr + k}
              templateColumns={`repeat(${
                columns.length ? columns.length + 1 : 3
              }, 1fr)`}
              justifyContent='flex-start'
              padding="0 7px"
              onClick={() => {
                setModalData(tr);
                onOpen();
              }}
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
                zIndex={2}
                alignItems="center"
                display="flex"
                justifyContent="center"
              >
                <Button
                  isLoading={deleting.includes(tr._id)}
                  border="none"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleting((prev) => {
                      let clone = _.clone(prev);
                      clone.push(tr._id);
                      return clone;
                    });
                    handleDelete(e, tr._id, () => {
                      setTimeout(() => {
                        setDeleting((prev) => {
                          let clone = _.clone(prev);
                          return clone.filter((i) => i !== tr._id);
                        });
                      }, 100);
                    });
                  }}
                  p="0"
                  minW="20px"
                  h="20px"
                >
                  {!deleting.includes(tr._id) && (
                    <span className="material-symbols-outlined button">
                      delete
                    </span>
                  )}
                </Button>
                <Button
                  border="none"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage(tr);
                    navigate("/book/" + tr._id);
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent bg="var(--color-3)">
          <ModalHeader>Informações do Livro!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Object.keys(modalData).map((key) => (
              <Text key={key} p="0.3em">
                {getDescriptionByName(key)}: {modalValue(modalData[key])}
              </Text>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BooksTable;
