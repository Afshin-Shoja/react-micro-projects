import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Box,
  Heading,
  HStack,
  Spacer,
  useDisclosure,
  Button,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const DR = "top";
  return (
    <HStack
      padding="10px"
      borderRadius="0 0  20px 20px "
      border="1px"
      borderColor="blackAlpha.700"
      position="sticky"
      top="0"
      background="orange.200"
      zIndex="20"
    >
      <Box p="2">
        <Heading size="lg">react micro projects</Heading>
      </Box>

      <Spacer />
      <Button
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onOpen}
        background="transparent"
        borderColor="blackAlpha.700"
      />
      <Drawer placement={DR} onClose={onClose} isOpen={isOpen}>
        {/* <DrawerOverlay /> */}
        <Box>
          <DrawerContent
            backgroundImage="url('/grain.png')"
            backgroundRepeat="repeat"
            backgroundColor="orange.200"
            width="78%"
            marginX="auto"
          >
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody overflowY="auto">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Box>
      </Drawer>
    </HStack>
  );
};
