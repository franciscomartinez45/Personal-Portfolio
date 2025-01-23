import { DropDownMenu } from "./components/DropDownMenu";
import Home from "./Home";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";

export const App = () => {
  return (
    <div>
      <ThemeProvider>
        <DropDownMenu />
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
