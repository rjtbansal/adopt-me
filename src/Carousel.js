import { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (event) => {
    // reading our index property from img data-index. we skip data- and thats why its .dataset.index and not .dataset.data-index as one might imagine
    //below we get a string so by using + it converts to a number
    setActive(+event.target.dataset.index);
  };

  // throw new Error;  //uncomment this to actually see the ErrorBoundary trigger
  return (
    <div className="carousel">
      <img src={images[active]} data-testid="hero" alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            data-index={index}
            data-testid={`thumbnail${index}`}
            onClick={handleIndexClick}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
};

export default Carousel;
