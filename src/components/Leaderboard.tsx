type UserData = {
    username: string,
    kills: number,
    experience: number,
    totalMoney: number
}

interface LeaderboardProps {
    data: Array<UserData>,
    dataOption: string
}

const Leaderboard = ( props: LeaderboardProps) => {
    const { data, dataOption } = props;
    if( data[0][dataOption as keyof UserData] ) {
        data.sort((a, b) => {
            const value1 = b[dataOption as keyof UserData];
            const value2 = a[dataOption as keyof UserData];
            if (typeof value1 === "number" &&  typeof value2 === "number") {
                return value1 - value2;
            }
            return -1;
        });
    }
    
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>{dataOption}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( (data, index) => {
                            return (
                                <tr>
                                    <td className="min-w-[0.5rem] max-w-[0.5rem]">{index+1}</td>
                                    <td className="min-w-[16rem] max-w-[16rem]">{data.username}</td>
                                    <td className="min-w-[16rem] max-w-[16rem]">{data[dataOption as keyof UserData]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard