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
    const nextNullCount = 6 - lastDay.day + (7 - lastDay.week) * 7;
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
    return (
        <table>
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>
                {weeks.map((week, weekIndex) => (
                    <tr>
                        {week.map((day, dayIndex) => {
                            if (day === null) {
                                return <td></td>;
                            }
                            return (
                                <td>
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
