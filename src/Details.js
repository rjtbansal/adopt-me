import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";

const Details = (props) => {
  const [loading, setLoading] = useState(true);
  const [petDetails, setPetDetails] = useState({});

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
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

//we need withRouter HOC because react-router-dom needs to pass us our match.params.id
export default withRouter(Details);
