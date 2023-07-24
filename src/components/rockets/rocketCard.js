import PropTypes from 'prop-types';
import './rocketsCard.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addReservation,
  deleteReservation,
} from '../../redux/rockets/rocketsSlice';

function RocketCard({
  id, indexNo, img, title, description, reserved,
}) {
  const rocketsState = useSelector((state) => state.rocketsList);
  const dispatch = useDispatch();
  const addReservationHandler = (e) => {
    const { indexNo } = e.target.dataset; // Storing index no for clicked rocket item
    const id = rocketsState.value[+indexNo];
    dispatch(addReservation(id)); // Calling reducer to add reservation in the state
  };
  const deleteReservationHandler = (e) => {
    const { indexNo } = e.target.dataset; // Storing index no for clicked rocket item
    const id = rocketsState.value[+indexNo];
    dispatch(deleteReservation(id)); // Calling reducer to add reservation in the state
  };
  return (
    <li className="rocketCard" data-id={id}>
      <img className="rocketCard" alt={title} src={img} />
      <div className="wrapper">
        <h3 className="rocketCard">{title}</h3>
        <p className="rocketCard">
          {reserved && <span className="reservedTag">Reserved</span>}
          {' '}
          {description}
        </p>
        {reserved || (
          <button
            onClick={addReservationHandler}
            data-index-no={indexNo}
            type="button"
            className="rocketCard"
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            onClick={deleteReservationHandler}
            data-index-no={indexNo}
            type="button"
            className="rocketCard cancelBtn"
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </li>
  );
}

RocketCard.defaultProps = {
  id: '',
  img: '',
  title: '',
  description: '',
  reserved: false,
  indexNo: 0,
};

RocketCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  reserved: PropTypes.bool,
  indexNo: PropTypes.number,
};

export default RocketCard;
