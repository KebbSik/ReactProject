import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "@/assets/logo.webp";
import DarkModeToggle from "./DarkMode/DarkModeToggle";
import { ColorModeButton } from "../ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>This is my navbar</Text>
      {/* <DarkModeToggle /> */}
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
