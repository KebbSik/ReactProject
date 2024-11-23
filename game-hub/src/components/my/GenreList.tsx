import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Box,
  Center,
  Grid,
  HStack,
  Image,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";

const GenreList = () => {
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
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
