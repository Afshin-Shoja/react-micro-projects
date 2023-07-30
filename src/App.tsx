import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { StopWatch } from "./projects/01-StopWatch";
import { TodoBoard } from "./projects/02-TodoBoard";
import { ProgressStep } from "./projects/03-Steps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StopWatch" element={<StopWatch />} />
        <Route path="/TodoBoard" element={<TodoBoard />} />
        <Route path="/Steps" element={<ProgressStep />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
