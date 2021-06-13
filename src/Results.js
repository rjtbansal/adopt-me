import Pet from "./Pet";

const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h2>No Pets Found</h2>
    ) : (
      pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
          images={pet.images}
        />
      ))
    )}
  </div>
);

export default Results;
