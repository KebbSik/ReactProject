import React from "react";
import bullsEye from "@/assets/bulls-eye.webp";
import thumbsUp from "@/assets/thumbs-up.webp";
import meh from "@/assets/meh.webp";
import { ImageProps, Image, Box } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3 || !rating) return null;

  const emojiMap: {
    [key: number]: { src: string; alt: string; boxSize: string };
  } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recomended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  const emoji = emojiMap[rating];
  return (
    <Image src={emoji.src} alt={emoji.alt} boxSize={emoji.boxSize} mt={1} />
  );
};

export default Emoji;
