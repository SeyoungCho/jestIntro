import "./App.css";
import Hello from "./components/Hello";
import Timer from "./components/Timer";
const user = {
  name: "Mike",
  age: 30,
};

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
