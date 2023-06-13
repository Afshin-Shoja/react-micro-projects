import { Box } from "@chakra-ui/react";
import Projects from "./Projects";
import { Hero } from "./Hero";

export const Body = () => {
  return (
    <Box
      padding="20px"
      borderRadius="20px"
      border="1px"
      borderColor="gray.200"
      marginTop="10px"
    >
      <Hero />
      <Projects />
    </Box>
  );
};