import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  
  import { MdEmail } from "react-icons/md";
  
  export const ButtonMessage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Menu isOpen={isOpen}>
          <MenuButton as={Button} onMouseLeave={onClose} onMouseEnter={onOpen}>
            <MdEmail />
          </MenuButton>
  
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem>Chat</MenuItem>
            <MenuItem>Diskusi</MenuItem>
            <MenuItem>Ulasan</MenuItem>
            <MenuItem>Pesan Bantuan</MenuItem>
            <MenuItem>Pesanan Dikomplain</MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  };
  