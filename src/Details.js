import { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

const Details = (props) => {
  const [loading, setLoading] = useState(true);
  const [petDetails, setPetDetails] = useState({});
  const [theme] = useContext(ThemeContext);
  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?id=${props.match.params.id}`
      );
      const json = await res.json();
      setLoading(false);
      setPetDetails(json.pets[0]);
    }
    fetchDetails();
  }, [props.match.params.id]);

  const { animal, breed, city, state, description, name, images } = petDetails;
  //throw new Error; //uncomment to actually trigger the error by our ErrorBoundary
  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="details">
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city}, {state}
          </h2>
          {/* setting backgroundColor via our theme context color */}
        <button style={{backgroundColor: theme}}>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

const DetailsWithRouter = withRouter(Details);
//we need withRouter HOC because react-router-dom needs to pass us our match.params.id
export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
