import { Box, Container } from "@chakra-ui/react";
import { Body } from "./componnets/Main/Body";
import { Footer } from "./componnets/Footer/Footer";
import { Header } from "./componnets/Header/Header";

function App() {
  return (
    <>
      <Box
        backgroundImage="url('/grain.png')"
        backgroundRepeat="repeat"
        backgroundColor="orange.200"
        width="100%"
        position="relative"
      >
        <Container maxWidth="1200px" minWidth="300px" paddingTop="10px">
          <Header />
          <Body />
          <Footer />
        </Container>
      </Box>
    </>
  );
}

export default App;
