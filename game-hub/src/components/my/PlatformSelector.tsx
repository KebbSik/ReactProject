import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  Icon,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot variant="subtle">
      <MenuTrigger asChild>
        <Button variant="surface">
          Platforms
          <Icon>
            <FaChevronDown />
          </Icon>
        </Button>
      </MenuTrigger>
      <MenuContent position="absolute">
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
