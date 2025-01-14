import React, { useMemo } from "react";

const CallsHeatmap = () => {
const callData = [
  // January Calls
  { date: "2025-01-01", phoneNumber: "+92 3058884771" },
  { date: "2025-01-01", phoneNumber: "+92 3058884772" },
  { date: "2025-01-02", phoneNumber: "+92 3058884771" },
  { date: "2025-01-02", phoneNumber: "+92 3058884773" },
  { date: "2025-01-03", phoneNumber: "+92 3058884771" },
  { date: "2025-01-03", phoneNumber: "+92 3058884772" },
  { date: "2025-01-03", phoneNumber: "+92 3058884771" },
  { date: "2025-01-03", phoneNumber: "+92 3058884772" }, // 4 calls on this date

  // February Calls
  { date: "2025-02-10", phoneNumber: "+92 3058884773" },
  { date: "2025-02-14", phoneNumber: "+92 3058884774" },
  { date: "2025-02-14", phoneNumber: "+92 3058884775" }, // 2 calls on Valentine's Day

  // March Calls
  { date: "2025-03-01", phoneNumber: "+92 3058884776" },
  { date: "2025-03-15", phoneNumber: "+92 3058884777" },
  { date: "2025-03-15", phoneNumber: "+92 3058884778" }, // 2 calls

  // June Calls
  { date: "2025-06-21", phoneNumber: "+92 3058884779" },
  { date: "2025-06-21", phoneNumber: "+92 3058884780" },
  { date: "2025-06-22", phoneNumber: "+92 3058884781" }, // Spread across two days

  // July Calls
  { date: "2025-07-03", phoneNumber: "+92 3058884772" },

  // October Calls
  { date: "2025-10-31", phoneNumber: "+92 3058884782" }, // Halloween call

  // December Calls
  { date: "2025-12-25", phoneNumber: "+92 3058884783" }, // Christmas call
  { date: "2025-12-31", phoneNumber: "+92 3058884784" }, // New Year's Eve call
];


  // Process data to get counts per day
  const dailyCounts = useMemo(() => {
    const counts = {};
    callData.forEach((call) => {
      counts[call.date] = (counts[call.date] || 0) + 1;
    });
    return counts;
  }, []);

  // Get intensity color based on number of calls
  const getColor = (count) => {
    if (count === 0) return "bg-gray-100";
    if (count === 1) return "bg-green-100";
    if (count === 2) return "bg-green-300";
    return "bg-green-500";
  };

  // Generate dates for the last year
  const generateDates = () => {
    const dates = [];
    const currentDate = new Date("2025-01-01");
    const endDate = new Date("2025-12-31");

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const dates = useMemo(() => generateDates(), []);

  // Group dates by week for the grid layout
  const weeks = useMemo(() => {
    const result = [];
    let currentWeek = [];

    dates.forEach((date) => {
      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(date);
    });

    if (currentWeek.length > 0) {
      result.push(currentWeek);
    }

    return result;
  }, [dates]);

  return (
    <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-black">Calls Activity</h2>
      </div>
      <div>
        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((date) => {
                const dateStr = date.toISOString().split("T")[0];
                const count = dailyCounts[dateStr] || 0;
                return (
                  <div
                    key={dateStr}
                    className={`w-3 h-3 rounded-sm ${getColor(count)}`}
                    title={`${dateStr}: ${count} calls`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-gray-100" />
          <div className="w-3 h-3 rounded-sm bg-green-100" />
          <div className="w-3 h-3 rounded-sm bg-green-300" />
          <div className="w-3 h-3 rounded-sm bg-green-500" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default CallsHeatmap;
