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
              <Stack mt="6" spacing="3">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardBody>
              <Image
                src="/No-Image.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">project one</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  demo
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  gitHub
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          {/* ========================================= */}
          <Card width="350px">
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          {/* ========================================= */}
        </SimpleGrid>
      </Box>
    </>
  );
};
