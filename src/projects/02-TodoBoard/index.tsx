import { Box, Button, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InpuT } from "./components/input";
import { useState } from "react";

export const TodoBoard: React.FC = () => {
  const [tasklist, setTasklist] = useState<string[]>([]);
  return (
    <Box bgColor="yellow.200" minHeight="100vh">
      {/* ----------------fix btn-------------------- */}
      <Link to="/">
        <Button position="fixed" left="10px" top="10px" colorScheme="green">
          back
        </Button>
      </Link>
      {/* ----------------start-------------------- */}
      <Stack alignItems="center" paddingTop="40px">
        <Heading marginBottom="20px">TodoBoard</Heading>
        <InpuT tasklist={tasklist} setTasklist={setTasklist} />
        <Grid
          marginTop="50px"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap="40px"
        >
          {tasklist.map((task, index) => (
            <Box
              position="relative"
              key={index}
              bgColor="blue.200"
              height="200px"
              width="200px"
              rounded="2xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* <VStack > */}
              <Text overflow="hidden">{task}</Text>
              <Button
                position="absolute"
                top="8px"
                right="8px"
                colorScheme="red"
              >
                X
              </Button>
              {/* </VStack> */}
            </Box>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};
