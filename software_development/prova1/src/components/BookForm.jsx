import { Button, Input, Stack, Text } from "@chakra-ui/react";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";

const BookForm = () => {
  const { currentPage, book, onlyOne, send } = useContext(BooksContext);
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

  const handle = useCallback(() => {
    send(state, id);
  }, [id, send, state]);

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
            value={state?.[input.name] ?? ""}
            onChange={(e) => setState({ [input.name]: e.target.value })}
            disabled={input?.disabled}
          />
        </Fragment>
      ))}
      <Button onClick={handle}>Enviar</Button>
    </Stack>
  );
};

export default BookForm;
