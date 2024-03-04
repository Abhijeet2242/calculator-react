import React, { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import btn from "./components/ButtonsContainer.module.css";
import APIService from "./store/apiService.js";
import CalculationHistory from "./components/CalculationHistory";

function App() {
  const [calVal, setCalVal] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const onButtonClick = async (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
      try {
        const data = await APIService.postData(calVal, result);
        console.log("Data sent successfully:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (buttonText === "backspace") {
      setCalVal(calVal.slice(0, -1));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className={styles.calculator}>
      {!showHistory ? (
        <>
          <Display displayValue={calVal}></Display>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
          <button className={`${btn.buttonsContainer} ${styles.historyButton}`} onClick={toggleHistory}>History</button>
        </>
      ) : (
        <>
          <CalculationHistory />
          <button className={`${btn.buttonsContainer} ${styles.backButton}`} onClick={toggleHistory}>Back</button>
        </>
      )}
    </div>
  );
}

export default App;
