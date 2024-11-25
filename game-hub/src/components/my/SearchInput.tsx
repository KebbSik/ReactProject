import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup width="100%" startElement={<BsSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;