/*eslint-disable */
import PropTypes from "prop-types";
import "./rocketsCard.css";

function RocketCard({ id, img, title, description }) {
  return (
    <li className="rocketCard" data-id={id}>
      <img className="rocketCard" alt={title} src={img} />
      <div className="wrapper">
        <h3 className="rocketCard">{title}</h3>
        <p className="rocketCard">{description}</p>
        <button type="button" className="rocketCard">
          Reserve Rocket
        </button>
      </div>
    </li>
  );
}

RocketCard.defaultProps = {
  id: "",
  img: "",
  title: "",
  description: "",
};

RocketCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default RocketCard;
