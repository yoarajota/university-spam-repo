import { Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <Box as="nav" padding="10px 7px" h="2em" display="flex" gap="1em">
      {location.pathname !== "/" &&
        <button onClick={() => navigate(-1)}>Voltar</button>
      }
    </Box>
  );
};

export default Navbar;
