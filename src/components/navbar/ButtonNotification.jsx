import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React from "react";

import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

export const ButtonNotification = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton as={Button} onMouseLeave={onClose} onMouseEnter={onOpen}>
          <FaBell />
        </MenuButton>

        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem>
            Notifikasi
            <Box ml={"10px"}>
              <IoIosSettings />
            </Box>
          </MenuItem>
          <MenuItem>Test 1</MenuItem>
          <MenuItem>Test 1</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
