import { useState } from "react";
import "./App.css";
import {
  chakra,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/my/NavBar";
import GameGrid from "./components/my/GameGrid";
import GenreList from "./components/my/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/my/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/my/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spaceX={5} pl={2} mb={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </chakra.div>
  );
}

export default App;
