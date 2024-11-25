import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "@/assets/logo.webp";
import DarkModeToggle from "./DarkMode/DarkModeToggle";
import { ColorModeButton } from "../ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      {/* <DarkModeToggle /> */}
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
