import React from "react";
import styles from "./ButtonsContainer.module.css";
import { TiBackspace } from "react-icons/ti";

const BACKSPACE_BUTTON = "backspace";


const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "%",
    BACKSPACE_BUTTON,
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "="
   
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName === BACKSPACE_BUTTON ? <TiBackspace /> : buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
