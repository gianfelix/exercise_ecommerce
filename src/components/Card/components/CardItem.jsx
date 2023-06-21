import {
  Box,
  Flex,
  VStack,
  Text,
  Image,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../redux/reducer/CartReducer";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);
  return (
    <Box key={item.id}>
      <GridItem colSpan={1}>
        <Flex
          sx={{
            border: "1px solid lightGrey",
            borderRadius: "6px",
            padding: "20px",
            boxShadow: "1px 1px   grey",
            minHeight: "400px",
            maxHeight: "450px",
            width: "300px",
          }}
        >
          <VStack
            sx={{
              alignItems: "left",
            }}
          >
            <Box>
              <Image
                sx={{
                  height: "200px",
                  width: "250px",
                  marginBottom: "20px",
                }}
                objectFit="cover"
                src={item.image}
              />
            </Box>
            <Box
              sx={{
                minHeight: "50px",
                minWidth: "50%",
              }}
            >
              <Text>{item.jenis}</Text>
              <Text>{item.nama}</Text>
              <Text>Rp. {item.harga}</Text>
            </Box>
            <Button width="100%" onClick={() => dispatch(addToCart(item))}>
              Add To Cart
            </Button>
          </VStack>
        </Flex>
      </GridItem>
    </Box>
  );
};

export default CardItem;
