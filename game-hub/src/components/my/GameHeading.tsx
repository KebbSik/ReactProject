import { GameQuery } from "@/App";
import { Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl" lineHeight={1}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
