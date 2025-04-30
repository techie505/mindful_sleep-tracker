import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
  } from "recharts";
  
  export default function SleepTrendGraph({ history }: { history: any[] }) {
    if (!history?.length) {
      return <p className="text-white text-center">No sleep data available.</p>;
    }
  
    return (
      <div className="bg-[#161b22] p-6 rounded-lg max-w-2xl w-full border border-gray-700 mx-auto">
        <h2 className="text-xl font-semibold text-center text-sky-400 mb-4">
          📊 Last 7 Days Sleep Score
        </h2>
        <div className="flex justify-center">
          <LineChart width={600} height={250} data={history}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" domain={[50, 100]} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563" }}
              labelStyle={{ color: "#e5e7eb", fontWeight: "bold" }}
              itemStyle={{ color: "#93c5fd" }}
              formatter={(value: number) => [`${value}`, "Sleep Score"]}
            />
            <Line
              type="monotone"
              dataKey="sleepScore"
              stroke="#60a5fa"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </div>
      </div>
    );
  }
  