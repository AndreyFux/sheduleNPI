import styles from "./Calendar.module.scss";
import { useState, useEffect } from "react";
function Calendar(props) {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let data = 21;

    const date = new Date();
    const weekDay = date.getDay();
    const monthDay = date.getDate();
    const month = date.getMonth();

    const getWeek = () => {
        const countDayOnMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        let result = [];
        let countMonthDay;
        if (weekDay > 1) {
            countMonthDay = monthDay - (weekDay - 1);
        } else if (weekDay === 0) {
            countMonthDay = monthDay - 6;
        } else {
            countMonthDay = monthDay;
        }
        for (let i = 0; i < week.length; i++) {
            if (countMonthDay + i > countDayOnMonth[month]) {
                let count = countDayOnMonth[month] - (countMonthDay + (week.length - 1));
                result.push({ weekday: `${week[i]}`, moonthday: `${count + i}` });
            } else {
                result.push({ weekday: `${week[i]}`, moonthday: `${countMonthDay + i}` });
            }
        }
        return result;
    };
    const calendar = getWeek();

    return (
        <div className={styles.data}>
            {calendar.map((item) => {
                data = data + 1;
                return (
                    <div
                        className={
                            (item.weekday === "Вс"
                                ? styles.vacation
                                : styles.dataElement) +
                            (props.activeDay == item.weekday ? " " + styles.active : " ")
                        }
                        onClick={() =>
                            item.weekday != "Вс" && props.setActiveDay(item.weekday)
                        }
                    >
                        <div className={styles.dataContainer}>
                            <span className={styles.day}>{item.weekday}</span>
                        </div>
                        <div className={styles.dataContainer}>
                            <span>{item.moonthday}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Calendar;
