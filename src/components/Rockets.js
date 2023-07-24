import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rocketsList.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <ul>
      {rocketsData.map((rocket) => (
        <li key={rocket.id}>{rocket.cost_per_launch}</li>
      ))}
    </ul>
  );
};

export default Rockets;
