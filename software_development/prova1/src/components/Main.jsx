import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import BookForm from "./BookForm";
import BooksTable from "./BooksTable";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <Navbar />

      <Box
        as="main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Routes>
          <Route path="/book/:id?" element={<BookForm />} />
          <Route index path="*" element={<BooksTable />} />
        </Routes>
      </Box>
    </>
  );
};

export default Main;
