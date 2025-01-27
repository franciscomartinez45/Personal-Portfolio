import { Menu } from "./Menu";
import Index from "./Index";

import "./style/index.css";
import { ThemeProvider } from "./style/ThemeContext";

export const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Menu />
        <Index />
      </ThemeProvider>
    </div>
  );
};

export default App;
