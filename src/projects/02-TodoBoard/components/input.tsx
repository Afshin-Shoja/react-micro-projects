import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

interface InputProps {
  tasklist: string[];
  setTasklist: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InpuT: React.FC<InputProps> = ({ tasklist, setTasklist }) => {
  const [input, setInput] = useState("");
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasklist([...tasklist, input]);
    setInput("");
  };
  return (
    <form onSubmit={handleAddTask}>
      <HStack gap="20px">
        <Input
          variant="gray"
          className="border rounded px-2 p-10"
          type="text"
          placeholder="enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Input>
        <Button type="submit" colorScheme="green" width="100px">
          add
        </Button>
      </HStack>
    </form>
  );
};
