export default function InsightsSection({ insights }: { insights: string[] }) {
    return (
      <div className="bg-[#161b22] text-white p-6 rounded-lg w-full max-w-2xl mx-auto border border-gray-700">
        <h3 className="text-xl font-semibold text-pink-400 mb-2">🧠 Sleep Insights</h3>
        <ul className="list-disc pl-6 text-sm text-gray-300">
          {insights.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    );
  }
  