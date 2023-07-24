import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';
import './mission.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions: MissionsVar, isLoading, isError } = useSelector((store) => store.missionsList);
  const storedMissions = JSON.parse(localStorage.getItem('missions')) || [];
  const missions = storedMissions.length > 0 ? storedMissions : MissionsVar;

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error">
        <h1>Something went wrong...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="table-div">
        <table className="table">
          <thead className="table-row">
            <tr className="head">
              <th className="name-colum">Mission</th>
              <th className="description-colum">Description</th>
              <th>Status</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody className="t-body">

            { missions.map((mission) => (
              <tr key={mission.mission_id} className="row">
                <td className="name-colum">{mission.name}</td>
                <td className="description-colum">{mission.description}</td>
                <td>
                  <span>Not A Member</span>
                </td>
                <td className="text-center">
                  <button type="button">Join Mission</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Missions;
