import logo from "../../img/LOGO.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__img">
        <img className="header__img__file" src={logo} alt="Logo de Kasa" />
      </div>
      <div className="header__links">
        {/* <Link to="/" className="header__links__content">
          Accueil
        </Link>
        <Link
          to="/about"
          className="header__links__content header__links__content__secondary"
        >
          A Propos
        </Link> */}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "header__links__content active"
              : "header__links__content"
          }
          header__links__content
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "header__links__content header__links__content__secondary active"
              : "header__links__content header__links__content__secondary"
          }
        >
          A propos
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
