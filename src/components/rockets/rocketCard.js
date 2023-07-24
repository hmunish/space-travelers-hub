import PropTypes from 'prop-types';

const RocketCard = function ({
  id, img, title, description,
}) {
  return (
    <div className="rocketCard" data-id={id}>
      <img className="rocketCard" alt={title} src={img} />
      <div className="wrapper">
        <h3 className="rocketCard">{title}</h3>
        <p className="rocketCard">{description}</p>
        <button className="rocketCard">Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketCard.defaultProps = {
  id: '',
  img: '',
  title: '',
  description: '',
};

RocketCard.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default RocketCard;
