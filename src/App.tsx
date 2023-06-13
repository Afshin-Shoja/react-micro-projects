import { Box, Container } from "@chakra-ui/react";
import { Header } from "./componnets/Header";

function App() {
  return (
    <>
      <Box
        backgroundImage="url('/public/grain.png')"
        backgroundRepeat="repeat"
        backgroundColor="gray"
        height="100vh"
      >
        <Container maxWidth="1200px" minWidth="500px" paddingTop="10px">
          <Header />
          {/* body */}
          {/* footer */}
        </Container>
      </Box>
    </>
  );
}

export default App;
