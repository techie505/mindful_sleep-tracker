import dayjs from "dayjs";

export type SleepStage = {
  light: number;
  deep: number;
  rem: number;
};

export type SleepEntry = {
  date: string;
  start: string;
  end: string;
  duration: number;
  disturbances: number;
  score: number;
  stages: SleepStage;
  insights: string[];
  tip: string;
};

export function generateSleepData(): SleepEntry[] {
  const now = dayjs();
  const entries: SleepEntry[] = [];

  for (let i = 6; i >= 0; i--) {
    const date = now.subtract(i, "day");
    const end = date.hour(7).minute(30).format("HH:mm");
    const duration = Math.floor(Math.random() * 121) + 360; // 360–480 mins
    const start = date.subtract(duration, "minute").format("HH:mm");

    const light = Math.floor(duration * 0.5);
    const deep = Math.floor(duration * 0.3);
    const rem = duration - light - deep;
    const score = Math.floor(60 + Math.random() * 40); // 60–100

    entries.push({
      date: date.format("YYYY-MM-DD"),
      start,
      end,
      duration,
      disturbances: Math.floor(Math.random() * 5),
      score,
      stages: { light, deep, rem },
      insights: [
        score > 85
          ? "Great sleep efficiency."
          : "Consider adjusting bedtime schedule.",
        `You had ${Math.floor(Math.random() * 5)} disturbances.`,
      ],
      tip:
        score > 85
          ? "Keep up the great routine!"
          : "Try reducing screen time before bed.",
    });
  }

  return entries;
}
