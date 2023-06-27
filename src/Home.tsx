import { Box, Container } from "@chakra-ui/react";
import { Header } from "./componnets/Header/Header";
import { Body } from "./componnets/Main/Body";
import { Footer } from "./componnets/Footer/Footer";

export const Home = () => {
  return (
    <Box
      backgroundImage="url('/grain.png')"
      backgroundRepeat="repeat"
      backgroundColor="orange.200"
      width="100%"
      position="relative"
    >
      <Container maxWidth="1200px">
        <Header />
        <Body />
        <Footer />
      </Container>
    </Box>
  );
};
