import styles from "./Shedule.module.scss";
import { data } from "../../data.js";
import { useState } from "react";

function Shedule(props) {
    let a = [];

    for (let key in data) {
        if (props.activeDay == key) {
            a = [];
            a.push(data[key]);
        }
    }
    return (
        <>
            <div className={styles.studyTime}>
                <div className={styles.firstTimeElement}>
                    <span className={styles.startCouple}>09:00</span>
                    <span className={styles.endCouple}>10:30</span>
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.startCouple}>10:45</span>
                    <span className={styles.endCouple}>12:15</span>
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.startCouple}>13:15</span>
                    <span className={styles.endCouple}>14:45</span>
                </div>
                <div className={styles.lastTimeElement}>
                    <span className={styles.startCouple}>15:00</span>
                    <span className={styles.endCouple}>16:30</span>
                </div>
            </div>

            <ol className="w-4/12 flex flex-col  relative border-l border-blue-600 dark:border-gray-700">
                {a[0].map((element) => {
                    return !Object.keys(element).length ? (
                        <li key={Math.random()} className="lesson">
                            <div className="mx-6 px-6 pb-6 m-10 mt-0 bg-white rounded-3xl shadow-xl inline-block">
                                <div className="absolute w-5 h-5 bg-blue-600 rounded-full mt-3 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>

                                <h3 className="text-4xl font-semibold text-gray-900 dark:text-white pt-6 bg-white">
                                    Пары нет
                                </h3>
                            </div>
                        </li>
                    ) : (
                        <li key={Math.random()} className="lesson">
                            <div className="mx-6 px-6 mt-0 mb-2 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                <div className="absolute w-5 h-5 bg-blue-600 rounded-full mt-3 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white pt-8 bg-white whitespace-nowrap">
                                    {element.title}
                                </h3>
                                <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 bg-white">
                                    {element.teacher + element.classRoom + element.type}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </>
    );
}

export default Shedule;
