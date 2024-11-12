import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";
import DarkModeToggle from "./components/my/DarkMode/DarkModeToggle";

function App() {
  return (
    <div className="App">
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <DarkModeToggle />
      </HStack>
    </div>
  );
}

export default App;
