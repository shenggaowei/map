import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.App}>
      <p>hello world</p>
    </div>
  );
}

export default App;
