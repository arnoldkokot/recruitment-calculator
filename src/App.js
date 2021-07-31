import "./App.css";
import Selector from "./components/Selector";
import Results from "./components/Results";
import { Header } from "@primer/components";

function App() {
  return (
    <div className="App">
      <Header>
        <Header.Item>Ostatni update 31/07/2021</Header.Item>
      </Header>
      <main>
        <Selector />
        <Results />
      </main>
    </div>
  );
}

export default App;
