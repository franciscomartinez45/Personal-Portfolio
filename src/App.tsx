import { DropDownMenu } from "./DropDownMenu";
import Index from "./Index";

import "./style/index.css";
import { ThemeProvider } from "./style/ThemeContext";

export const App = () => {
  return (
    <div>
      <ThemeProvider>
        <DropDownMenu />
        <Index />
      </ThemeProvider>
    </div>
  );
};

export default App;
