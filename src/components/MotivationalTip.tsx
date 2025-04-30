const tips = [
    "🛌 Stick to a consistent sleep schedule every day.",
    "📵 Avoid screens 1 hour before bedtime.",
    "🚫 Cut out caffeine after 4 PM.",
    "🏃 A short walk post-dinner can help improve sleep.",
    "🧘‍♂️ Try meditation or deep breathing before bed."
  ];
  
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  
  export default function MotivationalTip() {
    return (
      <div className="bg-[#161b22] p-6 rounded-lg w-full max-w-2xl mx-auto border border-gray-700 text-center">
        <h3 className="text-xl font-semibold text-yellow-400 mb-2">🌙 Motivational Tip</h3>
        <p className="text-sm text-gray-300 italic">{randomTip}</p>
      </div>
    );
  }
  