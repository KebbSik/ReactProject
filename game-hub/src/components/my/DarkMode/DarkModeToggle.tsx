import React from "react";
import useDarkMode from "./useDarkMode";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      {/* <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button> */}
      <HStack>
        {/*
      Switch sizes:
      -"xs"
      -"sm"
      -"md"
      -"lg" */}
        <Switch
          // invalid
          size="lg"
          onCheckedChange={toggleDarkMode}
          trackLabel={{
            on: (
              <Icon color="yellow.400">
                <FaSun />
              </Icon>
            ),
            off: (
              <Icon color="gray.400">
                <FaMoon />
              </Icon>
            ),
          }}
        ></Switch>
        <Text>{isDarkMode ? "Dark Mode" : "Light Mode"}</Text>
      </HStack>
    </>
  );
};

export default DarkModeToggle;
