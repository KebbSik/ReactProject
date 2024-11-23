import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  chakra,
  Grid,
  GridItem,
  Show,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/my/NavBar";
import GameGrid from "./components/my/GameGrid";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <chakra.div
      // colorPalette="gray"
      bg={{ base: "gray.50", _dark: "gray.900" }} // with this i can easly manipulate clors in light and dark modes
    >
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
    </chakra.div>
  );
}

export default App;
