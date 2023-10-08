import { Button, Input, Stack, Text } from "@chakra-ui/react";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";
import { fromISO8601toYYYYMMDD, isISO8601String } from "../helpers";

const BookForm = () => {
  const { currentPage, book, onlyOne, send } = useContext(BooksContext);
  const [isLoading, setIsLoading] = useState();
  const [state, setState] = useReducer(
    (prev, data) => ({ ...prev, ...data }),
    currentPage
  );

  const { id } = useParams();
  useEffect(() => {
    async function boot() {
      if (!currentPage && id) {
        setState(await onlyOne(id));
      }
    }

    boot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle = useCallback(async () => {
    setIsLoading(true);
    send(state, id, () => {
      setIsLoading(false);
    });
  }, [id, send, state]);

  const getValueToInput = useCallback(
    (input) => {
      if (
        input.type === "date" &&
        state?.[input.name] &&
        isISO8601String(state[input.name])
      ) {
        return fromISO8601toYYYYMMDD(state?.[input.name]);
      }

      return state?.[input.name] ?? "";
    },
    [state]
  );

  return (
    <Stack spacing={3} w="25vw">
      {book.map((input) => (
        <Fragment key={input.name}>
          <Text w="100%" textAlign="center">
            {input.name}
          </Text>
          <Input
            type={input.type}
            placeholder={input.name}
            size="md"
            value={getValueToInput(input)}
            onChange={(e) => setState({ [input.name]: e.target.value })}
            disabled={input?.disabled}
          />
        </Fragment>
      ))}
      <Button isLoading={isLoading} onClick={handle}>
        Enviar
      </Button>
    </Stack>
  );
};

export default BookForm;
