import React from "react";
import "./style.css";
import NumberSelector from "./NumberSelector";

export default function ItemPicker() {
  return (
    <>
      <NumberSelector initialNumber={3} title={"Bed"} />
      <NumberSelector initialNumber={2} title={"Small Table"} />
      <NumberSelector initialNumber={0} title={"Armchair"} />
    </>
  );
}
