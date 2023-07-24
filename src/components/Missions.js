import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, isError } = useSelector((store) => store.missionsList);

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
    <table>
      <thead>
        <tr className="head">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody className="t-body">

        { missions.map((mission) => (
          <tr key={mission.mission_id} className="row">
            <td>{mission.name}</td>
            <td>{mission.description}</td>
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
  );
};
export default Missions;
