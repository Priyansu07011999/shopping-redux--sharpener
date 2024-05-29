const Card = (props) => {
  return (
    <section className={`shadow-lg rounded-md bg-white p-4 ${props.className ? props.className : ''}`}>
      {props.children}
    </section>
  );
};

export default Card;
