import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { StopWatch } from "./projects/01-StopWatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StopWatch" element={<StopWatch />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
