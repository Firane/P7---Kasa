import leftArrow from "../../img/VectorGauche.png";
import rightArrow from "../../img/VectorDroite.png";
import { useState } from "react";
// import PropTypes from "prop-types";

function Carrousel(pictures) {
  const [index, setIndex] = useState(0);

  function decrementCount() {
    if (index === 0) {
      setIndex(pictures.pics.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function incrementCount() {
    if (index === pictures.pics.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <>
      <div className="carrousel">
        <img
          className="carrousel__img"
          src={pictures.pics[index]}
          alt="Illustration du logement"
        />
        <div className="carrousel__arrows">
          <img
            src={leftArrow}
            alt="Fleche gauche"
            className="carrousel__arrows__leftArrow"
            id="left"
            onClick={decrementCount}
          />
          <img
            src={rightArrow}
            alt="Fleche droite"
            className="carrousel__arrows__rightArrow"
            id="right"
            onClick={incrementCount}
          />
        </div>
      </div>
    </>
  );
}

// Carrousel.propTypes = {
//   pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Carrousel;
