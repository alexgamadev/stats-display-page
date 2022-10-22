import { useState } from 'react';
import GlobalStatsDisplay from './components/GlobalStatsDisplay';
import LeaderboardDisplay from './components/LeaderboardDisplay';
import PersonalStatsDisplay from './components/PersonalStatsDisplay';

function App() {
  const [optionIndex, setOptionIndex] = useState(0);
  let components = [
    <LeaderboardDisplay/>,
    <GlobalStatsDisplay/>,
    <PersonalStatsDisplay/>
  ];

  let component = components[optionIndex];

  return (
    <div className="h-screen w-screen bg-base-100 py-6 px-6 flex-col items-center">
      <header className="flex justify-center text-white font-semibold text-7xl mb-10">
        Game Statistics
      </header>
      <div className="flex justify-center">
        <div className="btn-group">
          <button className={`btn ${optionIndex === 0 ? 'btn-active' : ''} font-bold text-primary`} onClick={() => setOptionIndex(0)}>Leaderboards</button>
          <button className={`btn ${optionIndex === 1 ? 'btn-active' : ''} font-bold text-primary`} onClick={() => setOptionIndex(1)}>General Stats</button>
          <button className={`btn ${optionIndex === 2 ? 'btn-active' : ''} font-bold text-primary`} onClick={() => setOptionIndex(2)}>Personal Stats</button>
        </div>
      </div>
      {component}
    </div>
    
  );
}

export default App;
