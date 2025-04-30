import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

interface SleepStages {
  light: number;
  deep: number;
  rem: number;
}

const COLORS = ["#60a5fa", "#34d399", "#a78bfa"];

export default function SleepStageChart({ stages }: { stages: SleepStages }) {
  const data = [
    { name: "Light", value: stages.light },
    { name: "Deep", value: stages.deep },
    { name: "REM", value: stages.rem },
  ];

  return (
    <div className="w-full py-10 flex flex-col items-center bg-[#111827] rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        🧬 Sleep Stage Pie Chart
      </h2>
      <div className="flex justify-center items-center">
        <PieChart width={360} height={360}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
            label={({ name }) => name}
            labelLine={false}
            isAnimationActive={false}
          >
            {COLORS.map((color, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563" }}
            itemStyle={{ color: "#e5e7eb" }}
            formatter={(value: number, name: string) => [`${value} mins`, name]}
          />
        </PieChart>
      </div>
    </div>
  );
}
