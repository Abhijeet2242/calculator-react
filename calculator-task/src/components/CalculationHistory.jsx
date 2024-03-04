import React, { useState, useEffect } from "react";
import APIService from "../store/apiService.js";
import styles from "./CalculationHistory.module.css";

const CalculationHistory = () => {
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchHistory = async () => {
      try {
        const data = await APIService.getData(signal);
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className={styles.cardContainer}>
      {history.map((item, index) => (
        <div key={index} className={styles.card}>
          <p className={styles.calculation}>{item.calculation}</p>
          <p className={styles.result}>= {item.result}</p>
        </div>
      ))}
    </div>
  );
};

export default CalculationHistory;
