import Thumb from "../components/Thumbs/thumbs";
import Banner from "../components/Banner/banner";

function Accueil() {
  return (
    <>
      <Banner />
      <section className="location">
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
      </section>
    </>
  );
}

export default Accueil;
