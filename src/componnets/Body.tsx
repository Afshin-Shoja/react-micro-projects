import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Button,
  Text,
  ButtonGroup,
  Divider,
  Stack,
  Image,
} from "@chakra-ui/react";
export const Body = () => {
  return (
    <>
      <Box
        padding="20px"
        borderRadius="20px"
        border="1px"
        borderColor="gray.200"
        marginTop="10px"
      >
        <SimpleGrid
          spacing={10}
          templateColumns="repeat(auto-fill, minmax(300px, 3fr))"
          alignContent="center"
          justifyItems="center"
        >
          <Card width="350px" boxShadow="xl">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" alignItems="center">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup width="100%" spacing="2">
                <Button width="50%" variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button width="50%" variant="solid" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px" boxShadow="xl">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" alignItems="center">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup width="100%" spacing="2">
                <Button width="50%" variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button width="50%" variant="solid" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px" boxShadow="xl">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" alignItems="center">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup width="100%" spacing="2">
                <Button width="50%" variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button width="50%" variant="solid" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px" boxShadow="xl">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" alignItems="center">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup width="100%" spacing="2">
                <Button width="50%" variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button width="50%" variant="solid" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px" boxShadow="xl">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" alignItems="center">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup width="100%" spacing="2">
                <Button width="50%" variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button width="50%" variant="solid" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
};
