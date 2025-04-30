import { useEffect, useState } from "react";
import { getSleepHistory, getTodaySleep } from "../mocks/sleepService";
import SleepSummaryCard from "./SleepSummaryCard";
import SleepTrendGraph from "./SleepTrendGraph";
import SleepStageChart from "./SleepStageChart";
import InsightsSection from "./InsightsSection";
import MotivationalTip from "./MotivationalTip";

export function OraTechDashboard() {
  const [sleep, setSleep] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([getTodaySleep(), getSleepHistory()]).then(([today, past]) => {
      setSleep(today);
      setHistory(past);
    });
  }, []);

  if (!sleep) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-4 py-10">
      <div className="flex flex-col items-center space-y-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center">🛌 Sleep Dashboard</h1>

        <SleepSummaryCard sleep={sleep} />
        <SleepTrendGraph history={history} />
        <SleepStageChart stages={sleep.stages} duration={sleep.durationMinutes} />
        <InsightsSection insights={sleep.insights} />
        <MotivationalTip />
      </div>
    </div>
  );
}
