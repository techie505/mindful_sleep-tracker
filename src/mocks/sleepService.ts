export function getTodaySleep() {
    const now = new Date();
    const end = now;
    const start = new Date(end.getTime() - 425 * 60000); // 425 minutes ago
  
    const formatTime = (d: Date) =>
      d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  
    const sleepScore = 60 + Math.floor(Math.random() * 40); // 60-99
    const tipsExcellent = [
      "🔥 You nailed your sleep goals. Keep the momentum!",
      "🌞 You're recharged. Use this energy to exercise or create."
    ];
    const tipsAverage = [
      "😴 Not bad. Try winding down earlier.",
      "📵 Try less screen time before sleep."
    ];
    const tipsLow = [
      "⏱️ Inconsistent sleep. Try to sleep and wake at the same time daily.",
      "🛑 Avoid caffeine 6 hours before bed."
    ];
  
    let insights: string[] = [];
    if (sleepScore >= 85) insights = tipsExcellent;
    else if (sleepScore >= 70) insights = tipsAverage;
    else insights = tipsLow;
  
    return Promise.resolve({
      date: now.toISOString().slice(0, 10),
      sleepScore,
      startTime: formatTime(start),
      endTime: formatTime(end),
      durationMinutes: 425,
      disturbances: Math.floor(Math.random() * 3),
      stages: { light: 180, deep: 120, rem: 125 },
      insights,
      pointsEarned: sleepScore >= 85 ? 50 : sleepScore >= 70 ? 30 : 10,
      badge: sleepScore >= 90 ? "🌟 Sleep Champion" : sleepScore >= 75 ? "⭐ Consistent Sleeper" : "💤 Improving"
    });
  }
  
  export function getSleepHistory() {
    const today = new Date();
    return Promise.resolve(
      Array.from({ length: 7 }).map((_, i) => {
        const d = new Date(today);
        d.setDate(d.getDate() - (6 - i));
        return {
          date: d.toISOString().slice(0, 10),
          sleepScore: 60 + Math.floor(Math.random() * 40)
        };
      })
    );
  }
  