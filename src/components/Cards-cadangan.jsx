import React from "react";
import {
  Box,
  Card,
  CardBody,
  VStack,
  Text,
  Image,
  Stack,
  CardFooter,
  Flex,
  Button,
  Divider,
} from "@chakra-ui/react";
export const Cards = () => {
  const barang = [
    {
      jenis: "Makanan",
      nama: "Beras IR 64",
      harga: "15.000",
      image:
        "https://i0.wp.com/harga.web.id/wp-content/uploads/Ilustrasi-Beras-IR-64-Jawapos.jpeg?ssl=1",
    },
    {
      jenis: "Pakaian",
      nama: "Erigo Jacket",
      harga: "155.000",
      image: "https://cf.shopee.co.id/file/sg-11134201-23020-wne0osd9thnvca",
    },
    {
      jenis: "Elektronik",
      nama: "Sony Alpha 7000 + lens",
      harga: "8.000.000",
      image:
        "https://i1.wp.com/rumorkamera.com/wp-content/uploads/2015/08/a7000.jpg?fit=620%2C354&ssl=1",
    },
  ];

  const [data, setData] = React.useState(barang);
  return (
    <>
      <Box>
        <Flex flexDirection="column" gap={"20px"} >
        {data.map((item) => {
          return (
            <Card w={"370px"}>
              <CardBody>
                <Flex>
                  <Image w={"60px"} h={"70px"} src={item.image} />
                  <Flex align={"center"} justify={"center"}>
                    <Stack ml={"20px"} maxW={"100px"} spacing={"1px"}>
                      <Text fontSize={"15px"} fontFamily={"roboto"}>
                        {item.jenis}{" "}
                      </Text>
                      <Text fontSize={"17px"} fontWeight={"bold"}>
                        {item.nama}
                      </Text>
                    </Stack>
                    <Text ml={"20px"} fontSize={"22px"}>
                      Rp {item.harga}
                    </Text>
                  </Flex>
                </Flex>
                <Box mt={"10px"}>
                  <Button mr={"5px"}>Detail</Button>
                  <Button ml={"5px"}>Buy Now</Button>
                </Box>
              </CardBody>
              <Divider/>
            </Card>
          );
        })}
        </Flex>
      </Box>
    </>
  );
};
