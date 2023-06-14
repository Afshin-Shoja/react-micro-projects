import { FaGithub } from "react-icons/fa";
import { ViewIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Badge,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const projectList = [
  {
    projectname: "Project 1",
    githubLink: "https://github.com/user/repo1",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project1",
    categorys: ["category1", "category2"],
  },
  {
    projectname: "Project 2",
    githubLink: "https://github.com/user/repo2",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project2",
    categorys: ["category2"],
  },
  {
    projectname: "Project 3",
    githubLink: "https://github.com/user/repo3",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project3",
    categorys: ["category1", "category3"],
  },
  {
    projectname: "Project 3",
    githubLink: "https://github.com/user/repo3",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project3",
    categorys: ["category1", "category3"],
  },
  {
    projectname: "Project 3",
    githubLink: "https://github.com/user/repo3",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project3",
    categorys: ["category1", "category3"],
  },
  {
    projectname: "Project 3",
    githubLink: "https://github.com/user/repo3",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project3",
    categorys: ["category1", "category3"],
  },
  {
    projectname: "Project 3",
    githubLink: "https://github.com/user/repo3",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project3",
    categorys: ["category1", "category3"],
  },
  {
    projectname: "Project 3",
    githubLink: "https://github.com/user/repo3",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project3",
    categorys: ["category1", "category3"],
  },
  {
    projectname: "Project 3",
    githubLink: "https://github.com/user/repo3",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project3",
    categorys: ["category1", "category3"],
  },
  {
    projectname: "Project 3",
    githubLink: "https://github.com/user/repo3",
    picUrl: "/No-Image.jpg",
    Url: "https://example.com/project3",
    categorys: ["category1", "category3"],
  },
];

const Projects = () => {
  return (
    <SimpleGrid
      marginTop="30px"
      spacing={10}
      templateColumns="repeat(auto-fill, minmax(300px, 3fr))"
      alignContent="center"
      justifyItems="center"
    >
      {projectList.map((project, index) => (
        <Card
          backgroundColor="whiteAlpha.200"
          key={index}
          width="350px"
          boxShadow="2xl"
        >
          <CardBody>
            <Image
              src={project.picUrl}
              alt={project.projectname}
              borderRadius="lg"
            />
            <Stack mt="2" direction="row">
              {project.categorys.map((category, index) => (
                <Badge key={index} colorScheme="green">
                  {category}
                </Badge>
              ))}
            </Stack>
            <Stack mt="4" spacing="3" alignItems="center">
              <Heading size="md">{project.projectname}</Heading>
            </Stack>
            <ButtonGroup mt="4" width="100%" spacing="2">
              <Button
                width="50%"
                as="a"
                href={project.Url}
                target="_blank"
                variant="outline"
                colorScheme="black"
                leftIcon={<ViewIcon />}
              >
                demo
              </Button>
              <Button
                width="50%"
                as="a"
                href={project.githubLink}
                target="_blank"
                variant="outline"
                colorScheme="black"
                leftIcon={<FaGithub />}
              >
                gitHub
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Projects;
