import Ball from "./ball";

const Bag = names => {
  let balls = [];
  names.forEach(item => {
    balls.push(<Ball type={item} />);
  });
  return <div>{balls}</div>;
};

export default Bag;
