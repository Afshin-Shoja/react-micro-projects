import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const StopWatch = () => {
  return (
    <>
      <Link to="/">
        <Button position="fixed" left="10px" bottom="10px" colorScheme="green">
          back
        </Button>
      </Link>
      <div>index</div>
    </>
  );
};
