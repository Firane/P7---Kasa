import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../components/carrousel/carrousel";
import Dropdown from "../components/Dropdown/dropdown";
import Tag from "../components/tag/tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Logement() {
  let { id } = useParams();

  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const response = await fetch("logements.json");
      const result = await response.json();
      const data = result.find((object) => object.id === id);
      setLoading(false);
      if (data) {
        setLogement(data);
      }
    } catch (error) {
      console.error("Error fetching data :", error);
    }
  };

  if (loading) {
    return (
      <>
        <div className="lds-dual-ring"></div>
      </>
    );
  } else {
    if (logement === null) {
      return <Navigate to="/NotFound" />;
    } else {
      function ratingGenerator() {
        const rated = parseInt(logement.rating);
        const content = [];

        for (let i = 0; i < rated; i++) {
          content.push(
            <li key={i}>
              <FontAwesomeIcon icon={faStar} />
            </li>
          );
        }
        if (content.length === 5) {
          return content;
        } else {
          for (let i = content.length; i < 5; i++) {
            content.push(
              <li key={i} className="grey">
                <FontAwesomeIcon icon={faStar} />
              </li>
            );
          }
        }
        return content;
      }

      return (
        <>
          <Carrousel pictures={logement.pictures} />
          <section className="logement__content">
            <div>
              <div className="logement__content__left">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <Tag tags={logement.tags} />
              </div>
              <div className="logement__content__right">
                <div className="logement__content__right__host">
                  <div className="logement__content__right__host__name">
                    {logement.host.name.split(" ").join("\n")}
                  </div>
                  <div className="logement__content__right__host__picture">
                    <img src={logement.host.picture} alt="Hebergeur" />
                  </div>
                </div>
                <div className="logement__content__right__stars">
                  <ul>{ratingGenerator()}</ul>
                </div>
              </div>
            </div>

            <div className="dropdowns">
              <Dropdown title="Description" css={{ width: 45 + "%" }}>
                <p>{logement.description}</p>
              </Dropdown>
              <Dropdown title="Équipements" css={{ width: 45 + "%" }}>
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Dropdown>
            </div>
          </section>
        </>
      );
    }
  }
}

export default Logement;
