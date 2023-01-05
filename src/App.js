import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const AddBy = () => {
    dispatch({ type: "ADDBY" });
  };

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={increment}>+ Increment</button>{" "}
      <button onClick={decrement}>- Decrment</button>
      <button onClick={AddBy}>Increment By 10</button>
    </div>
  );
}

export default App;
