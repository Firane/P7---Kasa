import fond from "../../img/e270fc8fc902a1eb738458e7b29c1899.jpg";

function Banniere() {
  return (
    <div>
      <div className="banner">
        <div className="banner__content">
          <img
            className="banner__content__img"
            src={fond}
            alt="Endroit avec la mer et des falaises"
            width="870"
            height="1305"
          />
          <p className="banner__content__text">
            Chez vous, partout et ailleurs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banniere;

// il va falloir props or smtg pour dyanmiser limage de fond
