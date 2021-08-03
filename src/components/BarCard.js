const BarCard = ({ bar }) => {
  return (
    <div>
      <h1>{bar.name}</h1>
      <p>Description: {bar.description}</p>
      <p>Rating: {bar.rating}</p>
      <p>City: {bar.city}</p>
      {/* {bar.bar_game_types.map((type) => {
        return <div>{type.game_type}</div>;
      })} */}
    </div>
  );
};

export default BarCard;
