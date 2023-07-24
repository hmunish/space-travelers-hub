import React from 'react';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const reservedRocketsNameList = useSelector(
    (state) => state.rocketsList.reservedRocketsName,
  );

  return (
    <ul>
      {reservedRocketsNameList.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};

export default Myprofile;
