import { useState, useEffect } from "react";
import Carrousel from "../components/carrousel/carrousel";
import Dropdown from "../components/Dropdown/dropdown";

function Logement() {
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
    console.log("its empty");
  } else {
    console.log("rendered");
    console.log(logements);
    return (
      <>
        <Carrousel pics={logements[0].pictures} />
        <Dropdown info={logements[0]} />
      </>
    );
  }
}

export default Logement;
