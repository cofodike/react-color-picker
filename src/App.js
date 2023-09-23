import Input from "./Input";
import Square from "./Square";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hex, setHex] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Square colorValue={colorValue} hex={hex} isDarkText={isDarkText} />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        hex={hex}
        setHex={setHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
