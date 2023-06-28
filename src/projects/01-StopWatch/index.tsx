import { Button, ButtonGroup, HStack, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const StopWatch = () => {
  const [Time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
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
      <Link to="/">
        <Button position="fixed" left="10px" top="10px" colorScheme="green">
          back
        </Button>
      </Link>
      <Stack margin="40px auto" width="500px">
        <Text>StopWatch</Text>
        <HStack>
          <span>{("0" + Math.floor((Time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((Time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((Time / 10) % 100)).slice(-2)}</span>
        </HStack>
        <HStack>
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
              onClick={() => {
                setTime(0);
                setRunning(false);
              }}
            >
              reset
            </Button>
          </ButtonGroup>
        </HStack>
      </Stack>
    </>
  );
};
