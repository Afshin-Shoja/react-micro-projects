import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function calculateProgressWidth(currentStep: number) {
  return `${(currentStep - 1) * 33}%`;
}
export const ProgressStep = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const NextCTA = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const PrevCTA = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="stepbody">
      {/* ----------------fix btn-------------------- */}
      <Link to="/">
        <Button position="fixed" left="10px" top="10px" colorScheme="green">
          back
        </Button>
      </Link>
      {/* ----------------start-------------------- */}
      <div className="container">
        <div className="progress-container">
          <div
            className="progress"
            style={{ width: calculateProgressWidth(currentStep) }}
          ></div>
          <div className={`circle ${currentStep >= 1 ? "active" : ""}`}>1</div>
          <div className={`circle ${currentStep >= 2 ? "active" : ""}`}>2</div>
          <div className={`circle ${currentStep >= 3 ? "active" : ""}`}>3</div>
          <div className={`circle ${currentStep >= 4 ? "active" : ""}`}>4</div>
        </div>
        <button className="btn" onClick={PrevCTA} disabled={currentStep === 1}>
          Prev
        </button>
        <button className="btn" onClick={NextCTA} disabled={currentStep === 4}>
          Next
        </button>
      </div>
    </div>
  );
};
