import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-row justify-evenly">
      {data.map((card, id) => {
        return (
          <div key={id}>
            <Card
              title={card.title}
              url={card.url}
              bg={card.color.backGround}
              value={card.value}
              png={card.png}
              percent={card.percent}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;