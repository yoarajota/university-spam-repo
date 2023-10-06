import { Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box as="navbar">
      <button onClick={() => navigate(-1)}>Go back</button>
      <Link to="/book">Form</Link>
    </Box>
  );
};

export default Navbar;
