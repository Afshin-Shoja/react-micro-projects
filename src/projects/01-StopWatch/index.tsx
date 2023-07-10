import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const StopWatch = () => {
  const [Time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: number;
    interval = 0;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <>
      {/* ----------------fix btn-------------------- */}
      <Link to="/">
        <Button position="fixed" left="10px" top="10px" colorScheme="green">
          back
        </Button>
      </Link>
      {/* ----------------start-------------------- */}
      <Stack margin="80px auto" width="350px">
        <Card align="center" variant="filled" width="350px">
          <CardHeader>
            <Text fontSize="4xl">StopWatch</Text>
          </CardHeader>
          <CardBody alignItems="center">
            <HStack fontSize="40px">
              <span>{("0" + Math.floor((Time / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((Time / 1000) % 60)).slice(-2)}:</span>
              <span>{("0" + ((Time / 10) % 100)).slice(-2)}</span>
            </HStack>
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              {running ? (
                <Button
                  width="60px"
                  colorScheme="red"
                  onClick={() => {
                    setRunning(false);
                  }}
                >
                  stop
                </Button>
              ) : (
                <Button
                  width="60px"
                  colorScheme="green"
                  onClick={() => {
                    setRunning(true);
                  }}
                >
                  start
                </Button>
              )}

              <Button
                width="60px"
                colorScheme="yellow"
                onClick={() => {
                  setTime(0);
                  setRunning(false);
                }}
              >
                reset
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Stack>
    </>
  );
};
