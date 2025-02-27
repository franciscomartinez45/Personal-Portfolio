import { Menu } from "./components/Menu";
import Index from "./pages/Index";
import "./style/index.css";
import { ThemeProvider } from "./components/ThemeContext";
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
