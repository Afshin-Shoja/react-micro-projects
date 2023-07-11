import { Box, Button, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Input } from "./components/input";
import { useState } from "react";

export const TodoBoard: React.FC = () => {
  const [tasklist, setTasklist] = useState<string[]>([]);
  console.log(tasklist);
  return (
    <>
      {/* ----------------fix btn-------------------- */}
      <Link to="/">
        <Button position="fixed" left="10px" top="10px" colorScheme="green">
          back
        </Button>
      </Link>
      {/* ----------------start-------------------- */}
      <Stack alignItems="center" margin="40px">
        <Heading marginBottom="20px">TodoBoard</Heading>
        <Input tasklist={tasklist} setTasklist={setTasklist} />
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
              key={index}
              bgColor="gray"
              height="200px"
              width="200px"
              rounded="2xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text>{task}</Text>
            </Box>
          ))}
        </Grid>
      </Stack>
    </>
  );
};
