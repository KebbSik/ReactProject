import React from "react";
interface Props {
  //   onClick: () => void;
  onCheckedChange: () => void;
}

const Switch = ({ onCheckedChange }: Props) => {
  return <Switch onCheckedChange={onCheckedChange}></Switch>;
};

export default Switch;
