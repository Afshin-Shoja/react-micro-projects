import { Box } from "@chakra-ui/react";
import { Hero } from "./Hero";
import Projects from "./Projects";

export const Body = () => {
  return (
    <Box
      padding="20px"
      borderRadius="20px"
      border="1px"
      borderColor="blackAlpha.700"
      marginTop="10px"
    >
      <Hero />
      <Projects />
    </Box>
  );
};
