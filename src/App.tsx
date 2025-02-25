import { Menu } from "./Menu";
import Index from "./Index";
import "./style/index.css";
import { ThemeProvider } from "./style/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
export const App = () => {
  return (
    <div>
      <Analytics />
      <ThemeProvider>
        <Menu />
        <Index />
      </ThemeProvider>
    </div>
  );
};

export default App;
