import { useState, FunctionComponent, MouseEvent, ReactNode } from "react";

interface IProps {
  images: string[];
}

const Carousel: FunctionComponent<IProps> = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
    // reading our index property from img data-index. we skip data- and thats why its .dataset.index and not .dataset.data-index as one might imagine
    //below we get a string so by using + it converts to a number
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      setActive(+event.target.dataset.index);
    }
  };

  // throw new Error;  //uncomment this to actually see the ErrorBoundary trigger
  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            data-index={index}
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
