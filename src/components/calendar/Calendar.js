import styles from "./Calendar.module.scss";
import { useState, useEffect } from "react";
function Calendar(props) {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

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
            if ((monthDay - (weekDay - 1)) > 0) {
                countMonthDay = monthDay - (weekDay - 1);
            }
            else {
                const lastMonthLastDate = new Date(date.getFullYear(), date.getMonth(), 0);
                countMonthDay = lastMonthLastDate.getDate() - (weekDay - 2)
            }
        } else if (weekDay === 0) {
            if (countMonthDay + 6 > monthDay) {
                countMonthDay = monthDay - 6;
            }
            else{
                const lastMonthLastDate = new Date(date.getFullYear(), date.getMonth(), 0);
                console.log(lastMonthLastDate);
                countMonthDay = lastMonthLastDate.getDate() - 4;
            }
        } else {
            countMonthDay = monthDay;
        }
        // console.log(countMonthDay);
        for (let i = 0; i < week.length; i++) {
            if (countMonthDay + i > countDayOnMonth[month - 1]) {
                let count = countDayOnMonth[month - 1] - (countMonthDay + (week.length - 1));
                result.push({ weekday: `${week[i]}`, moonthday: `${count + i - 2}` });
            } else {
                result.push({ weekday: `${week[i]}`, moonthday: `${countMonthDay + i}` });
            }
        }
        // console.log(result);
        return result;
    };
    const calendar = getWeek();

    return (
        <div className={styles.data}>
            {calendar.map((item) => {
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
