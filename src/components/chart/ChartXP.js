import "./ChartXP.css";
import Target from "../../assets/images/target.png"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

export const ChartXP = () => {
    let currXP = 60;
    if (currXP > 100) {
        currXP = 100
    }

    const data = [
        { day: "M", xp: 0 },
        { day: "T", xp: 0 },
        { day: "W", xp: 0 },
        { day: "T", xp: 0 },
        { day: "F", xp: 0 },
        { day: "S", xp: 0 },
        { day: "S", xp: 0 }
        // { day: "M", xp: 0 },
        // { day: "T", xp: 0 },
        // { day: "W", xp: 120 },
        // { day: "T", xp: 30 },
        // { day: "F", xp: 150 },
        // { day: "S", xp: 250 },
        // { day: "S", xp: 200 }
    ];

    return (
        <div className="App">
            <div className="chart">
                <div className="title">XP Progress</div>
                <div className="daily_goal">
                    <div className="daily_goal_img">
                        <img
                            src={Target}
                            alt=""
                        />
                    </div>
                    <div className="daily_goal_content">
                        <div className="daily_goal_content_title">Daily Goal</div>
                        <div className="daily_goal_progress">
                            <div className="daily_goal_progress_xp">
                                <div
                                    className="daily_goal_progress_xp_completed"
                                    style={{ width: `${(currXP * 100) / 100}%` }}
                                ></div>
                            </div>
                            <span> {currXP}/100 XP</span>
                        </div>
                    </div>
                </div>
                <div className="graph">
                    <LineChart
                        width={300}
                        height={200}
                        data={data}
                        margin={{ left: -25, right: 10 }}
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="#ffffff1a"
                            strokeDasharray="5 0"
                        />
                        <XAxis
                            tick={{ fontSize: 12, fontWeight: 600 }}
                            axisLine={false}
                            tickLine={false}
                            dataKey="day"
                        />
                        <YAxis
                            ticks={[0, 100, 200, 300, 400]}
                            tick={{ fontSize: 12, fontWeight: 600 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        {/* <Legend /> */}
                        <Line
                            type="monotone"
                            dataKey="xp"
                            stroke="#12abfd"
                            strokeWidth="3"
                            dot={{ r: 4, strokeWidth: 2, stroke: '#12abfd', fill: '#fff' }}
                            activeDot={{ r: 8 }}
                            label={{ fontSize: 10, fontWeight: 500, fill: "#ffffff33", position: "top" }}
                        />
                    </LineChart>
                </div>
            </div>
        </div>
    );
}
