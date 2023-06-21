
import { Navbar } from "../components/navbar/Navbar";
import { Box, Grid, Heading, Stack } from "@chakra-ui/react";

export const Cart = () => {
  return (
    <>
      <Navbar />
      <Stack pt={"100px"}>
        <Grid templateColumns={"repeat(2, 1fr)"}>
          <Box w={"1600px"}>
            <Heading>Keranjang</Heading>
            
          </Box>
          
        </Grid>
      </Stack>
    </>
  );
};
