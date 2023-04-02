import styles from "./Shedule.module.scss";
import { data } from "../../data.js";
import { useState } from "react";

function Shedule(props) {
    let a = [];
    const start = [" 9:00", "10:45", "13:15", "14:45"];
    const end = ["10:30", "12:15", "14:45", "16:30"];

    for (let key in data) {
        console.log(props.activeDay, key, props.activeDay == key);
        if (props.activeDay == key) {
            console.log("зашло");
            a = [];
            a.push(data[key]);
            console.log(data[key]);
        }
    }
    return (
        <>
            <div className="w-5/12">
                {a[0].map((element, i) => {
                    function changeFontSize() {
                        if (element.title != undefined && element.title.length > 35) {
                            return " text-2xl ";
                        }
                        return " text-3xl ";
                    }
                    let fontSize = changeFontSize();
                    return !Object.keys(element).length ? (
                        <div class="flex items-center justify-end relative">
                            <div class="hidden md:block w-30">
                                <div class=" w-30">
                                    <div className={styles.timeElement}>
                                        <div
                                            className={styles.startCouple + " time-block"}
                                        >
                                            {start[i]}
                                        </div>
                                        <div className={styles.endCouple}>{end[i]}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-r-2 border-blue-600 absolute h-full left-1 md:left-32 top-2 z-10">
                                <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                            </div>

                            <div class="ml-10 lessonblock">
                                <div>
                                    <div className="px-6 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                        <h3 className="text-4xl font-semibold text-gray-900 dark:text-white pt-8 bg-white">
                                            Пары нет
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div class="flex items-center justify-end relative">
                            <div class="hidden md:block w-30">
                                <div class=" w-30">
                                    <div className={styles.timeElement}>
                                        <div
                                            className={styles.startCouple + " time-block"}
                                        >
                                            {start[i]}
                                        </div>
                                        <div className={styles.endCouple}>{end[i]}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-r-2 border-blue-600 absolute h-full left-1 md:left-32 top-2 z-10">
                                <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                            </div>

                            <div class="ml-10 my-4 lessonblock">
                                <div>
                                    <div className="px-6 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                        <h3
                                            className={
                                                "font-semibold text-gray-900 dark:text-white pt-8 bg-white text-3xl leading-9 mb-1"
                                            }
                                        >
                                            {element.title}
                                        </h3>
                                        <p
                                            className={
                                                "text-xl mb-4 font-normal text-gray-500 dark:text-gray-400 bg-white"
                                            }
                                        >
                                            <span className="text-2xl bg-transparent">
                                                {element.classRoom}{" "}
                                            </span>
                                            {element.type} {element.teacher}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Shedule;
