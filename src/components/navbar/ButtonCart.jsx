import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useDisclosure,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import NavbarItem from "./NavbarItem";

export const ButtonCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItem = useSelector((state) => state.CartReducer.cart);

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton as={Button} onMouseLeave={onClose} onMouseEnter={onOpen}>
          <FaShoppingCart />
          <Flex
            borderRadius={"full"}
            justify="center"
            align="center"
            bg="red"
            style={{
              color: "white",
              width: "1.1rem",
              height: "1.1rem",
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(15%, 0%)",
            }}
          >
            {cartItem.length}
          </Flex>
        </MenuButton>

        <MenuList
          pos={"absolute"}
          left={"-170"}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <Box w={"350px"} p={"15px"} overflow={"scroll"} maxH={"500px"}>
            <Text fontSize={"17px"} fontWeight={"700"}>
              Keranjang Saya
            </Text>
            <NavbarItem cartItem={cartItem} />
          </Box>
        </MenuList>
      </Menu>
    </>
  );
};
