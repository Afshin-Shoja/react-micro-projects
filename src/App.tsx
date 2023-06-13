import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { Header } from "./componnets/Header";

function App() {
  return (
    <>
      <Container maxWidth="1200px" minWidth="500px">
        <Header />
        {/* header */}
        <Flex width="100%" minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">react-micro-projects</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="teal">web site</Button>
            <Button colorScheme="teal">git hub</Button>
          </ButtonGroup>
        </Flex>
        {/* body */}
        {/* footer */}
      </Container>
    </>
  );
}

export default App;
