import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BiStoreAlt } from "react-icons/bi";
import { FaSistrix } from "react-icons/fa";

import { ButtonCart } from "./ButtonCart";
import { ButtonNotification } from "./ButtonNotification";
import { ButtonMessage } from "./ButtonMessage";
import LoginButton from "../login/LoginButton";
import RegisterButton from "../register/RegisterButton";

// import { RegisterButton } from "./RegisterButton";
// import { LoginButton } from "./LoginButton";

export const Navbar = () => {
  return (
    <Box
      bg={"#ffffff"}
      h={"70px"}
      pos={"fixed"}
      w={"100%"}
      zIndex={"3"}
      shadow={"lg"}
    >
      <Flex justify={"center"} pt={"13px"}>
        <Link to={"/"}>
          <Flex>
            <BiStoreAlt size={40} color="#41b549" />
            <Text
              color={"#41b549"}
              fontFamily={"Bauhaus"}
              fontSize={"30px"}
              ml={"10px"}
            >
              tokopedia
            </Text>
          </Flex>
        </Link>
        <Box ml={"100px"} pt={"10px"}>
          <Text>Kategori</Text>
        </Box>
        <Box ml={"40px"}>
          <InputGroup>
            <InputLeftElement>
              <FaSistrix mr="5px" size={"30px"} color="#41b549" />
            </InputLeftElement>
            <Input
              w={"800px"}
              _placeholder={{ opacity: 1, color: "gray" }}
              placeholder="Cari di Tokopedia"
              isInvalid
              errorBorderColor="#41b549"
            />
          </InputGroup>
        </Box>
        <Box ml={"100px"}> </Box>
        <Flex gap={"20px"}>
          <Link to={"/cart"}>
            <ButtonCart />
          </Link>
          <ButtonNotification />
          <ButtonMessage />
          {/* <Avatar src="https://bit.ly/dan-abramov" /> */}
          <LoginButton/>
          <RegisterButton/>
        </Flex>
      </Flex>
    </Box>
  );
};
