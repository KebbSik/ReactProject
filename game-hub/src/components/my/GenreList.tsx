import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Image,
  Link,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return (
      <Grid placeItems="center" paddingTop={5}>
        <Spinner
          size="xl"
          borderWidth="5px"
          color="green"
          css={{ "--spinner-track-color": "colors.yellow.500" }}
        />
      </Grid>
    );
  }
  return (
    <>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item
            key={genre.id}
            paddingY="5px"
            _hover={{ color: "white" }}
            overflow={"hidden"}
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                width="10rem"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                background={
                  genre.id === selectedGenre?.id
                    ? { base: "gray.200", _dark: "gray.800" }
                    : ""
                }
                onClick={() => {
                  onSelectGenre(genre);
                  //   console.log(genre.name);
                }}
                _hover={{
                  background: { base: "gray.200", _dark: "gray.800" },
                }}
                fontSize="sm"
                variant="ghost"
                // padding={0}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
