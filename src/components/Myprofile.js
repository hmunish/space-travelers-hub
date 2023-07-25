import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const Myprofile = () => {
  const reservedRocketsNameList = useSelector(
    (state) => state.rocketsList.reservedRocketsName,
  );

  return (
    <section className="display-missions-rockets">
      <div>
        <h1>My missions</h1>
        <ul>
          <li>Mars</li>
          <li>Mars</li>
          <li>Mars</li>
        </ul>
      </div>
      <div>
        <h1>My Rockets</h1>
        <ul>
          {reservedRocketsNameList.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Myprofile;
