import { useState } from "react";

interface InputProps {
  tasklist: string[];
  setTasklist: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Input: React.FC<InputProps> = ({ tasklist, setTasklist }) => {
  const [input, setInput] = useState("");
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasklist([...tasklist, input]);
    setInput("");
  };
  return (
    <form onSubmit={handleAddTask}>
      <input
        className="border rounded px-2 p-10"
        type="text"
        placeholder="enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit">add</button>
    </form>
  );
};
