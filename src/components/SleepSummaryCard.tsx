export default function SleepSummaryCard({ sleep }: { sleep: any }) {
    return (
      <div className="bg-[#161b22] p-6 rounded-lg w-full max-w-2xl mx-auto border border-gray-700">
        <p><strong>📅 Date:</strong> {sleep.date}</p>
        <p><strong>📈 Score:</strong> {sleep.sleepScore}</p>
        <p>
          <strong>🕒 Start:</strong> {sleep.startTime} | <strong>End:</strong> {sleep.endTime}
        </p>
        <p><strong>⏳ Duration:</strong> {sleep.durationMinutes} mins</p>
        <p>
          <strong>🧬 Stages:</strong> Light {sleep.stages.light}m / Deep {sleep.stages.deep}m / REM {sleep.stages.rem}m
        </p>
        <p><strong>⚡ Disturbances:</strong> {sleep.disturbances}</p>
      </div>
    );
  }
  