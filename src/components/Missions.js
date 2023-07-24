import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
        <tr>
          <td>
            <span>data</span>
          </td>
          <span>Not a Member</span>
          <td>
            <span>Data</span>
          </td>
          <td>
            <span>Active Member</span>
          </td>
          <td>
            <button type="button">Join Mission</button>
          </td>
        </tr>

      </tbody>
    </table>
  );
};
export default Missions;
