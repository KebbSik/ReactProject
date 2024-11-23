import useGames from "@/hooks/useGames";
import useGenres from "@/hooks/useGenres";
import { li, ul } from "framer-motion/client";
import React from "react";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
