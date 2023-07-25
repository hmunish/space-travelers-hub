import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const Myprofile = () => {
  const reservedRocketsNameList = useSelector(
    (state) => state.rocketsList.reservedRocketsName,
  );

  let missions = useSelector((state) => state.missions) || [];
  const savedMissions = JSON.parse(localStorage.getItem('missions')) || [];
  if (savedMissions.length > 0) {
    missions = savedMissions;
  }
  const myMissions = missions.filter((mission) => mission.joined === true);

  return (
    <section className="display-missions-rockets">
      <div>
        <h1>My missions</h1>
        <ul>
          {myMissions.map((mission) => (
            <li key={mission.id}>{mission.name}</li>

          ))}
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
