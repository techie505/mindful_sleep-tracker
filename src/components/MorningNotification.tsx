import { useEffect, useState } from 'react';
import SleepStageChart from './SleepStageChart';
import SleepTrendGraph from './SleepTrendGraph';
import { getTodaySleep, getSleepHistory } from '../mocks/sleepService';

export default function MorningNotification() {
  const [sleep, setSleep] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getTodaySleep(), getSleepHistory()])
      .then(([today, history]) => {
        setSleep(today);
        setHistory(history);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-6">
      <div className="w-full max-w-4xl space-y-10">
        
        {/* Header */}
        <div className="bg-[#111827] text-white p-6 rounded-xl shadow-md border border-gray-700 text-center">
          <h1 className="text-3xl font-bold text-orange-400 mb-3">🌅 Good Morning!</h1>
          <p className="text-sm text-gray-300 mb-4">Here’s how you slept last night:</p>

          <div className="space-y-1 text-base">
            <p><span className="font-semibold">🕒 Start:</span> {sleep.startTime} | <span className="font-semibold">End:</span> {sleep.endTime}</p>
            <p><span className="font-semibold">⏳ Duration:</span> {sleep.durationMinutes} mins</p>
            <p><span className="font-semibold">📊 Score:</span> {sleep.sleepScore}</p>
            <p><span className="font-semibold">🧬 Stages:</span> Light {sleep.stages.light}m / Deep {sleep.stages.deep}m / REM {sleep.stages.rem}m</p>
            <p><span className="font-semibold">⚡ Disturbances:</span> {sleep.disturbances}</p>
          </div>

          {/* Insights */}
          <div className="mt-4 space-y-2">
            {sleep.insights.map((tip: string, i: number) => (
              <p key={i} className="text-yellow-300 text-sm">💡 {tip}</p>
            ))}
          </div>

          {/* Rewards */}
          <div className="mt-4 space-y-1 text-base font-semibold">
            <p className="text-green-400">🏅 Badge Earned: {sleep.badge}</p>
            <p className="text-cyan-300">🔢 Points: +{sleep.pointsEarned}</p>
          </div>
        </div>

        {/* Sleep Stage Chart */}
        <div className="flex justify-center">
          <SleepStageChart stages={sleep.stages} />
        </div>

        {/* 7 Day Trend */}
        <div className="flex justify-center">
          <SleepTrendGraph history={history} />
        </div>
      </div>
    </div>
  );
}
