import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  Grid,
  GridItem,
  Show,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import DarkModeToggle from "./components/my/DarkMode/DarkModeToggle";
import NavBar from "./components/my/NavBar";
import GameGrid from "./components/my/GameGrid";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "side main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show when={isLargeScreen}>
          <GridItem area="side" bg="gold">
            side
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
      {/* <DarkModeToggle /> */}
    </div>
  );
}

export default App;
