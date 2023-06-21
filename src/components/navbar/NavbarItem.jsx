import { Box, HStack, Image, Text } from "@chakra-ui/react";

const NavbarItem = ({ cartItem }) => {
  return cartItem?.map((item) => {
    return (
      <Box
        sx={{
          height: "70px",
          padding: "10px",
          marginBottom: "10px",
          borderBottom: "1px solid lightGrey",
        }}
        key={item.id}
      >
        <HStack>
          <Image boxSize="50px" src={item?.image} />
          <Text fontWeight={'500'}>{item.jenis}</Text>
          <Text>{item.nama}</Text>
        </HStack>
      </Box>
    );
  });
};

export default NavbarItem;
