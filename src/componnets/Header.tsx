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
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <HStack
        padding="5px"
        marginTop="10px"
        border="1px soild black"
        borderRadius="20px"
      >
        <Box p="2">
          <Heading size="md">react-micro-projects</Heading>
        </Box>

        <Spacer />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </>
  );
};
