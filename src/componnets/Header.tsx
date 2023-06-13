import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
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
  const DR = "right";
  return (
    <>
      <HStack
        padding="10px"
        borderRadius="20px"
        border="1px"
        borderColor="gray.200"
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
        />
        <Drawer placement={DR} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};
