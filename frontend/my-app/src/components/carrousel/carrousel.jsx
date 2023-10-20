import leftArrow from "../../img/VectorGauche.png";
import rightArrow from "../../img/VectorDroite.png";
import { useState } from "react";

function handleClick(e) {
  console.log(e.target.id);
}
function carrousel() {
  return (
    <div className="carrousel">
      <img
        src={leftArrow}
        alt="Fleche gauche"
        className="carrousel__leftArrow"
        id="left"
        onClick={handleClick}
      />
      <img
        src={rightArrow}
        alt="Fleche droite"
        className="carrousel__rightArrow"
        id="right"
        onClick={handleClick}
      />
    </div>
  );
}

export default carrousel;
