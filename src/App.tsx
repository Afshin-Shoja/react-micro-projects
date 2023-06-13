import { Box, Container } from "@chakra-ui/react";
import { Header } from "./componnets/Header";
import { Body } from "./componnets/Body";

function App() {
  return (
    <>
      <Box
        backgroundImage="url('/grain.png')"
        backgroundRepeat="repeat"
        backgroundColor="gray"
        // height="max-content"
        width="100%"
      >
        <Container maxWidth="1200px" minWidth="300px" paddingTop="10px">
          <Header />
          <Body />
          {/* footer */}
        </Container>
      </Box>
    </>
  );
}

export default App;
