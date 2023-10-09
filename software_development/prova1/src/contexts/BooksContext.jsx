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

  const del = useCallback(
    (id) => {
      api.delete(`/api/v1/Books/${id}`).then(() => {
        reduc({ data: data.filter((book) => book.id !== id) });
        toast({
          description: "Excluído com sucesso!",
          position: "top-right",
          status: "success",
        });
      });
    },
    [data]
  );

  const mountFunc = useCallback((id) => {
    if (id) {
      return {
        message: "Alterado com sucesso!",
        method: "put",
        route: `/api/v1/Books/${id}`,
      };
    } else {
      return {
        message: "Inserido com sucesso!",
        method: "post",
        route: `/api/v1/Books`,
      };
    }
  }, []);

  const send = useCallback(
    async (state, id, afterFunction) => {
      const { message, method, route } = mountFunc(id);

      await api[method](route, state)
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

      afterFunction();
    },
    [mountFunc, toast]
  );

  return (
    <BooksContext.Provider
      value={{ data, setCurrentPage, currentPage, book, all, onlyOne, send, del }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksProvider, BooksContext };
