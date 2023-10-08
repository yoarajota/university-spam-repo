import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box as="nav">
      <button onClick={() => navigate(-1)}>Go back</button>
    </Box>
  );
};

export default Navbar;
