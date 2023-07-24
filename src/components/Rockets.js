import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketCard from './rockets/rocketCard';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rocketsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (rocketsData.loading) return <p className="fetchStatus">Loading...</p>;
  if (rocketsData.errors) return <p className="error">Error loading the rockets</p>;
  return (
    <ul className="rocketsList">
      {rocketsData.value.map((e) => (
        <RocketCard
          key={e.id}
          id={e.id}
          title={e.name}
          description={e.description}
          img={e.flickrImages[0]}
        />
      ))}
    </ul>
  );
};

export default Rockets;
