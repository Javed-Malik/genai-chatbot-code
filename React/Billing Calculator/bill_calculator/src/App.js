import "./App.css";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <Billiginput />
      <SelectPercentage>How did you like the services</SelectPercentage>
      <SelectPercentage>
        How did your friends like the services
      </SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function Billiginput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Enter the amount" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value={0}>Dissattified (0)</option>
        <option value={5}>It was Oky (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={5}>Absulatuly amazing (20%)</option>
      </select>
    </div>
  );
}
function Output() {
  <h3>you paw Rs x (Rs a + Rs b tip ) </h3>;
}
function Reset() {
  return <button>Reset</button>;
}

export default App;
