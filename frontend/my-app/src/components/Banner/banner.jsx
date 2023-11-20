import PropTypes from "prop-types";

function Banniere({ img, id, children }) {
  return (
    <div>
      <div className="banner">
        <div className="banner__content">
          <img
            className="banner__content__img"
            id={id}
            src={img}
            alt="Endroit avec la mer et des falaises"
          />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Banniere;

Banniere.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node,
};
