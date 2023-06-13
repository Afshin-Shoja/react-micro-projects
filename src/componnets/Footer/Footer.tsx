import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, HStack, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box height="100px" paddingBottom="10px">
      <HStack
        padding="20px"
        borderRadius="20px"
        border="1px"
        borderColor="blackAlpha.700"
        marginTop="10px"
        justifyContent="center"
      >
        <Text>created by </Text>
        <Link href="http://afshinshoja.com" isExternal>
          AfshinShoja <ExternalLinkIcon mx="2px" />
        </Link>
      </HStack>
    </Box>
  );
};
