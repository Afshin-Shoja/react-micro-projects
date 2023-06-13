import { Box, Container } from "@chakra-ui/react";
import { Header } from "./componnets/Header";

function App() {
  return (
    <>
      <Box
        backgroundImage="url('/public/grain.png')"
        backgroundRepeat="repeat"
        backgroundColor="gray"
        // height="max-content"
        height="2000px"
        width="100%"
      >
        <Container maxWidth="1200px" minWidth="300px" paddingTop="10px">
          <Header />
          {/* body */}
          {/* footer */}
        </Container>
      </Box>
    </>
  );
}

export default App;
