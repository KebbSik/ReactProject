import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import DarkModeToggle from "./components/my/DarkMode/DarkModeToggle";

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
        <GridItem area="nav" bg="coral">
          nav
        </GridItem>
        <Show when={isLargeScreen}>
          <GridItem area="side" bg="gold">
            side
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
