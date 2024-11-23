import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../ui/skeleton";
import GameCardContainer from "../GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
