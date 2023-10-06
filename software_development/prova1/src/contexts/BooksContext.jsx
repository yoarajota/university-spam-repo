import { createContext, useCallback, useReducer } from "react";
import api from "../axios";
import { useToast } from "@chakra-ui/react";

const BooksContext = createContext("books");

const book = [
  { name: "id", type: "number", disabled: true },
  { name: "title", type: "string" },
  { name: "description", type: "string" },
  { name: "pageCount", type: "number" },
  { name: "excerpt", type: "string" },
  { name: "publishDate", type: "date" },
];

/* eslint-disable react/prop-types */
const BooksProvider = ({ children }) => {
  const toast = useToast();
  const [{ currentPage, data }, reduc] = useReducer(
    (prev, data) => ({ ...prev, ...data }),
    { currentPage: null, data: [] }
  );

  const all = useCallback(() => {
    api.get("/api/v1/Books").then((res) => reduc({ data: res.data }));
  }, []);

  const onlyOne = useCallback((id) => {
    return api.get(`/api/v1/Books/${id}`).then((res) => {
      reduc({ currentPage: res.data });
      return res.data;
    });
  }, []);

  const setCurrentPage = (id) => {
    reduc({ currentPage: id });
  };

  const send = useCallback(
    (state, id) => {
      const message = id ? "Inserido com sucesso!" : "Alterado com sucesso!";

      api
        .post("/api/v1/Books", state)
        .then(() => {
          toast({
            description: message,
            position: "top-right",
            status: "success",
          });
        })
        .catch(() => {
          toast({
            description: "Erro ao salvar!",
            position: "top-right",
            status: "error",
          });
        });
    },
    [toast]
  );

  return (
    <BooksContext.Provider
      value={{ data, setCurrentPage, currentPage, book, all, onlyOne, send }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksProvider, BooksContext };
