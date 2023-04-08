import React from "react";
import Image from "next/image";

import Card from "./components/Card";
import FrontTemplate from "./components/FrontTemplate";
import BackTemplate from "./components/BackTemplate";

export default ({ flipped, onClick }: {
  flipped?: boolean,
  onClick?: () => void
}) => {
  return (
    <Card flipped={flipped} onClick={onClick}>
      <div className="back">
        <BackTemplate />
        <Image
          src="/static/cards/when-where-back.png"
          alt="When Where - Back"
          fill
        />
      </div>

      <div className="front">
        <FrontTemplate />
        <Image
          src="/static/cards/when-where-front.png"
          alt="When Where - Front"
          fill
        />
      </div>
    </Card>
  )
}