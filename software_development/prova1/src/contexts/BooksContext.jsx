import { createContext, useCallback, useReducer } from "react";
import api from "../axios";
import _ from "lodash";
import useFastToast from "../helpers/useFastToast";
import { useToast } from "@chakra-ui/react";

const BooksContext = createContext("books");

const book = [
  { name: "id", type: "number", disabled: true, description: "Identificador" },
  { name: "title", type: "string", description: "Título" },
  { name: "description", type: "textarea", description: "Descrição", validations: [{ type: "min_char", value: 30 }] },
  { name: "pageCount", type: "number", description: "Contagem de Páginas", validations: [{ type: "min", value: 10 }, { type: "not_null", value: 1 }] },
  { name: "excerpt", type: "textarea", description: "Excerto", validations: [{ type: "max_char", value: 425 }] },
  { name: "publishDate", type: "date", description: "Data de Publicação", validations: [{ type: "not_null", value: 1 }] },
];

/* eslint-disable react/prop-types */
const BooksProvider = ({ children }) => {
  const toast = useToast();
  const t = useFastToast(toast);

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
        t("success", "Excluído com sucesso!");
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

  const validate = useCallback((state) => {
    for (let key in state) {
      const { validations, description } = _.find(book, (o) => o.name === key);

      if (validations) {
        for (const validation of validations) {
          switch (validation.type) {
            case "min":
              if ((state[key] || 0) < validation.value) {
                throw Error(`O valor de ${description} deve ser maior que ${validation.value}!`)
              }
              break;
            case "min_char":
              if ((state[key]?.length || 0) < validation.value) {
                throw Error(`O tamanho de ${description} deve ser maior que ${validation.value}!`)
              }
              break;
            case "max_char":
              if ((state[key]?.length || 0) > validation.value) {
                throw Error(`O tamanho de ${description} deve ser menor que ${validation.value}!`)
              }
              break;
            case "not_null":
              if (validation.value && !state[key]) {
                throw Error(`${description} é obrigatório!`)
              }
              break;
            default:
              break;
          }
        }
      }
    }
  }, [])

  const send = useCallback(
    async (state, id, afterFunction) => {
      let status = "error";

      try {
        validate(state);

        const { message, method, route } = mountFunc(id);

        await api[method](route, state)
          .then(() => {
            status = "success";
            t(status, message);
          })
          .catch(() => {
            t(status, "Erro ao salvar!");
          });
      }
      catch (error) {
        t(status, error.message);
      }

      afterFunction(status);
    },
    [mountFunc, t]
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
