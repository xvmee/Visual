import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Inter, Montserrat, Poppins } from "./lib/fonts";

// Add the font classes to the body
document.body.classList.add(Inter.variable, Montserrat.variable, Poppins.variable);

createRoot(document.getElementById("root")!).render(<App />);
