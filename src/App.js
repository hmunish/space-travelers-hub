import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </main>
  );
}

export default App;
