import { Menu } from "./components/Menu";
import Index from "./pages/Index";
import "./style/index.css";

import { Analytics } from "@vercel/analytics/react";
export const App = () => {
  return (
    <div>
      <Analytics />
      <Menu />
      <Index />
    </div>
  );
};

export default App;
