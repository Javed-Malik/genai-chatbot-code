import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <Billiginput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the services
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friends like the services
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Billiginput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Enter the amount"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissattified (0)</option>
        <option value="5">It was Oky (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absulatuly amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      you pay Rs {bill + tip} (Rs {bill} bill + Rs {tip} tip )
    </h3>
  );
}
function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

export default App;
