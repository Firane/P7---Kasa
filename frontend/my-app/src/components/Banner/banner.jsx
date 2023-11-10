import PropTypes from "prop-types";

function Banniere({ img, children }) {
  return (
    <div>
      <div className="banner">
        <div className="banner__content">
          <img
            className="banner__content__img"
            src={img}
            alt="Endroit avec la mer et des falaises"
            width="870"
            height="1305"
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
  children: PropTypes.node,
};
