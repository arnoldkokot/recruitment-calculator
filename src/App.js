import { ThemeProvider } from "@primer/components";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <Main />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
