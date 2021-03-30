import React from "react";
import "./style.css";
import NumberSelector from "./NumberSelector";

export default function ItemPicker() {
  let data = [
    {
      id: 1,
      itemName: "Bed",
      initialNumber: 2
    },
    {
      id: 2,
      itemName: "Armchair",
      initialNumber: 5
    },
    {
      id: 3,
      itemName: "Table",
      initialNumber: 0
    }
  ];

  return (
    <div className="item-picker">
      {data.map(item => (
        <NumberSelector
          initialNumber={item.initialNumber}
          title={item.itemName}
          key={item.id}
        />
      ))}
    </div>
  );
}
