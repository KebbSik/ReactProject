import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "../ui/button";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot variant="subtle">
      <MenuTrigger asChild>
        <Button variant="surface">
          OrderBy: {currentSortOrder?.label || "Relevance"} <FaChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent
        position="absolute"
        top="123px"
        left={{ base: "137px", lg: "336px" }}
      >
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
