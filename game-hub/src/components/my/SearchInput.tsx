import { Box, Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (serchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box width="100%">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup width="100%" startElement={<BsSearch />}>
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search games..."
            variant="outline"
          ></Input>
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
