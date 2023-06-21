import { Box, Button, useDisclosure } from "@chakra-ui/react";

import { RegisterModal } from "./RegisterModal";

const RegisterButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box>
      <Button onClick={onOpen}>Register</Button>
      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default RegisterButton;
