import React, { useState } from 'react';
import GlobalStats from './components/GlobalStats';
import Leaderboard from './components/Leaderboard';
import logo from './logo.svg';

function App() {
  const [isLeaderboard, setIsLeaderboard] = useState(true);
  let component;

  if (isLeaderboard) {
    component = <Leaderboard/>
  } else {
    component = <GlobalStats/>
  }

  return (
    <div className="h-screen bg-slate-900 py-6 px-6">
      <div className="btn-group">
        <button className={`btn ${isLeaderboard ? 'btn-active' : ''}`} onClick={() => setIsLeaderboard(true)}>Leaderboards</button>
        <button className={`btn ${isLeaderboard ? '' : 'btn-active'}`} onClick={() => setIsLeaderboard(false)}>General Stats</button>
      </div>
      {component}
    </div>
    
  );
}

export default App;
