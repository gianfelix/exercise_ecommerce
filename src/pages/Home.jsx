import { Flex, Box, Stack, Text } from "@chakra-ui/react";

import { CarouselBanner } from "../components/CarouselBanner";
import Card from "../components/Card/Card";
import { CobaFetch } from "./CobaFetch";

export const Home = () => {
  return (
    <>
      
      <Flex align={"center"} justify={"center"}>
        <Stack>
          <Box w={"1200px"} h={"300px"} borderRadius={"20px"} mt={"120px"}>
            <CarouselBanner />
          </Box>
        </Stack>
      </Flex>
      <Box pl={'140px'} >
        <Card />
      </Box>
      <Box>
        <CobaFetch />
      </Box>
    </>
  );
};
