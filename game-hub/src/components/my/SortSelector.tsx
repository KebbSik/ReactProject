import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "../ui/button";

const SortSelector = () => {
  return (
    <MenuRoot variant="subtle">
      <MenuTrigger asChild>
        <Button variant="surface">
          OrderBy: Relevance <FaChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent position="absolute">
        <MenuItem value="Relevance">Relevance</MenuItem>
        <MenuItem value="Date added">Date added</MenuItem>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Release date">Release date</MenuItem>
        <MenuItem value="Popularity">Popularity</MenuItem>
        <MenuItem value="Average rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
