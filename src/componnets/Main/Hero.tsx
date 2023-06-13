import { Box, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box
      padding="20px"
      borderRadius="20px"
      marginTop="10px"
      backgroundColor="whiteAlpha.500"
      boxShadow="xl"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap="4"
        justifyContent="center"
        alignItems="center"
      >
        <GridItem width="100%" minWidth={{ md: "50%" }}>
          <Heading fontSize="6xl">Hello</Heading>
          <Text fontSize="2xl">
            In this website, you can view examples of small projects built with
            the React library. For quicker access, you can select the project
            title from the top menu.
          </Text>
        </GridItem>
        <GridItem width="100%" minWidth={{ md: "50%" }}>
          <Image
            className="react-logo"
            margin="auto"
            width="50%"
            src="/react.svg"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
