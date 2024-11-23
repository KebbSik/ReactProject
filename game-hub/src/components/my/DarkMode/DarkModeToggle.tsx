import React from "react";
import useDarkMode from "./useDarkMode";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <HStack>
      <Switch
        size="lg"
        onCheckedChange={toggleDarkMode}
        trackLabel={{
          on: <Box as={FaSun} color="yellow.400"></Box>,
          off: <Box as={FaMoon} color="gray.400" />,
        }}
      ></Switch>
    </HStack>
  );
};

export default DarkModeToggle;
