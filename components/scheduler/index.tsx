const TOTAL_WEEKS = 6;
const countUntil = (n) => Array.from(Array(n).keys());

interface DayOfMonth {
    date: number;
    day: number;
    month: number;
    week: number;
    year: number;
}

const getMonthDays = (month: number, year: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayInMonth = new Date(year, month, 1).getDay();
    const days = countUntil(daysInMonth).map((dateIndex) => {
        const date = new Date(year, month, dateIndex + 1);
        const day = date.getDay();
        const week = Math.ceil((date.getDate() + firstDayInMonth + 1) / 7);
        return {
            date: date.getDate(),
            month,
            year,
            day,
            week,
        };
    });
    return days;
};

const getMonthBreakup = (
    month: number,
    year: number
): Array<DayOfMonth | null> => {
    const days = getMonthDays(month, year);
    const previousNullCount = days.at(0).day;
    const lastDay = days.at(-1);
    const nextNullCount = 6 - lastDay.day + (6 - lastDay.week) * 7;
    const previousNulls = Array.from(Array(previousNullCount).keys()).map(
        () => null
    );
    const nextNulls = Array.from(Array(nextNullCount).keys()).map(() => null);
    console.log({ previousNulls, days, nextNulls });
    return [...previousNulls, ...days, ...nextNulls];
};

const groupByWeeks = (
    days: Array<DayOfMonth | null>
): Array<Array<DayOfMonth | null>> => {
    let weeks = [];
    const chunkSize = 7;
    for (let i = 0; i < days.length; i += chunkSize) {
        const chunk = days.slice(i, i + chunkSize);
        weeks = [...weeks, chunk];
    }
    return weeks;
};

function Scheduler() {
    const days = getMonthBreakup(11, 2023);
    const weeks = groupByWeeks(days);
    console.log({ weeks });
    return (
        <table className="scheduler">
            <thead className="scheduler-head">
                <tr className="scheduler-head-days">
                    <th className="scheduler-head-days-sunday">Sun</th>
                    <th className="scheduler-head-days-monday">Mon</th>
                    <th className="scheduler-head-days-tuesday">Tue</th>
                    <th className="scheduler-head-days-wednesday">Wed</th>
                    <th className="scheduler-head-days-thursday">Thu</th>
                    <th className="scheduler-head-days-friday">Fri</th>
                    <th className="scheduler-head-days-saturday">Sat</th>
                </tr>
            </thead>
            <tbody className="scheduler-body">
                {weeks.map((week, weekIndex) => (
                    <tr
                        key={`scheduler-week-${weekIndex + 1}`}
                        className={cx(
                            "scheduler-week",
                            `scheduler-week-${weekIndex + 1}`
                        )}
                    >
                        {week.map((day, dayIndex) => {
                            const dayKey = `scheduler-week-${
                                weekIndex + 1
                            }-day-${dayIndex + 1}`;
                            if (day === null) {
                                return (
                                    <td
                                        key={dayKey}
                                        className="scheduler-week-day scheduler-week-day-empty"
                                    ></td>
                                );
                            }
                            return (
                                <td
                                    key={dayKey}
                                    className={cx(
                                        "scheduler-week-day",
                                        `scheduler-week-day-${dayIndex + 1}`,
                                        `scheduler-week-${weekIndex + 1}-day`,
                                        `scheduler-week-${weekIndex + 1}-day-${
                                            dayIndex + 1
                                        }`
                                    )}
                                >
                                    {day.date} - {day.month} - {day.year}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Scheduler;
