import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/quoteWidget.js"; // Host this externally
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div  className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
