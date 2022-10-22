import { useState } from 'react';
import Dropdown from './Dropdown';
import Leaderboard from './Leaderboard';

const LeaderboardDisplay = () => {
    const [ dataOption, setDataOption ] = useState( 0 );
    const options = ["kills", "experience", "totalMoney"];
    const data = [
        {
            username: "Zezima",
            kills: 87,
            experience: 13560,
            totalMoney: 7654
        },
        {
            username: "Mcarthage",
            kills: 62,
            experience: 11280,
            totalMoney: 1563
        },
        {
            username: "SoulReaper",
            kills: 33,
            experience: 21993,
            totalMoney: 3910
        },
        {
            username: "Bob",
            kills: 29,
            experience: 12466,
            totalMoney: 8245
        },
        {
            username: "Kenneth",
            kills: 14,
            experience: 9178,
            totalMoney: 12061
        }
    ];

    return (
        <>
            <div className="artboard w-92 h-3/4 bg-base-300 rounded-md text-slate-200 font-bold text-xl py-4 px-4 mt-8">
                <Dropdown options={options} setOption={setDataOption}/>
                <Leaderboard data={data} dataOption={options[dataOption]}/>
            </div>
        </>
        

    )
}

export default LeaderboardDisplay;