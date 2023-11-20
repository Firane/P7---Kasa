import { useState, useEffect } from "react";
import Thumb from "../components/Thumbs/Thumbs";
import Banner from "../components/Banner/Banner";
import Cliff from "../img/e270fc8fc902a1eb738458e7b29c1899.jpg";
// import { element } from "prop-types";

function Accueil() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("logements.json");
      const result = await response.json();
      setLogements(result);
    } catch (error) {
      console.error("Error fetching data :", error);
    }
  };

  if (logements.length === 0) {
    return (
      <>
        <div className="lds-dual-ring"></div>
      </>
    );
  } else {
    return (
      <>
        <Banner img={Cliff}>
          <p className="banner__content__text">
            Chez vous,
            <br /> partout et ailleurs
          </p>
        </Banner>
        <section className="location">
          <Thumb logements={logements} />
        </section>
      </>
    );
  }
}

export default Accueil;
