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
import GenreList from "./components/my/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/my/PlatformSelector";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        templateColumns={{
          base: "1fr",
          lg: "200px  1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show when={isLargeScreen}>
          <GridItem area="side" paddingX="5px">
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </chakra.div>
  );
}

export default App;
