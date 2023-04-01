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
            {/* <div className={styles.studyTime}>
                <div className={styles.timeElement}>
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
                <div className={styles.timeElement}>
                    <span className={styles.startCouple}>15:00</span>
                    <span className={styles.endCouple}>16:30</span>
                </div>
            </div> */}

            {/* <ol className="w-4/12 flex flex-col  relative border-l border-blue-600 dark:border-gray-700">
                {a[0].map((element) => {
                    function changeFontSize() {
                        // console.log(element.title.length);
                        if (element.title != undefined && element.title.length > 35) {
                            return " text-2xl ";
                        }
                        return " text-3xl ";
                    }
                    let fontSize = changeFontSize();
                    return !Object.keys(element).length ? (
                        <li key={Math.random()} className="lesson">
                            <div className="mx-6 px-8 pb-8 m-10 my-5 bg-white rounded-3xl shadow-xl inline-block nolesson-fix">
                                <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 nolesson-fix-point"></div>

                                <h3 className="text-4xl font-semibold text-gray-900 dark:text-white pt-8 bg-white">
                                    Пары нет
                                </h3>
                            </div>
                        </li>
                    ) : (
                        <li key={Math.random()} className="lesson">
                            <div className="mx-6 px-6 mt-0  mb-2 pb-4 bg-white rounded-3xl shadow-xl inline-block block-fix">
                                <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 fix-point"></div>
                                <h3
                                    className={
                                        "font-semibold text-gray-900 dark:text-white pt-8 bg-white" +
                                        fontSize
                                    }
                                >
                                    {element.title}
                                </h3>
                                <p
                                    className={
                                        "text-xl mb-4 font-normal text-gray-500 dark:text-gray-400 bg-white"
                                    }
                                >
                                    {element.teacher + element.classRoom + element.type}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ol> */}
            <div className="w-5/12">
                <div class="flex items-center justify-end relative">
                    <div class="hidden md:block w-30">
                        <div class=" w-30">
                            <div className={styles.timeElement}>
                                <div className={styles.startCouple}>09:00</div>
                                <div className={styles.endCouple}>10:30</div>
                            </div>
                        </div>
                    </div>

                    <div class="border-r-2 border-blue-600 absolute h-full left-1 md:left-32 top-2 z-10">
                        <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                    </div>

                    <div class="ml-10">
                        <div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Abril - Junio</div>
                            </div>
                            <div className="px-6 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                <h3
                                    className={
                                        "font-semibold text-gray-900 dark:text-white pt-8 bg-white text-3xl"
                                    }
                                >
                                    Математическое моделирование
                                </h3>
                                <p
                                    className={
                                        "text-xl mb-4 font-normal text-gray-500 dark:text-gray-400 bg-white"
                                    }
                                >
                                    Заиченко А Н ст. ФиФ ЛАБ 237ГЛ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-end relative">
                    <div class="hidden md:block w-30">
                        <div class=" w-30">
                            <div className={styles.timeElement}>
                                <div className={styles.startCouple}>09:00</div>
                                <div className={styles.endCouple}>10:30</div>
                            </div>
                        </div>
                    </div>

                    <div class="border-r-2 border-blue-600 absolute h-full left-1 md:left-32 top-2 z-10">
                        <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                    </div>

                    <div class="ml-10">
                        <div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Abril - Junio</div>
                            </div>
                            <div className="px-6 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                <h3
                                    className={
                                        "font-semibold text-gray-900 dark:text-white pt-8 bg-white text-3xl"
                                    }
                                >
                                    Математическое моделирование
                                </h3>
                                <p
                                    className={
                                        "text-xl mb-4 font-normal text-gray-500 dark:text-gray-400 bg-white"
                                    }
                                >
                                    Заиченко А Н ст. ФиФ ЛАБ 237ГЛ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end relative">
                    <div class="hidden md:block w-30">
                        <div class=" w-30">
                            <div className={styles.timeElement}>
                                <div className={styles.startCouple}>09:00</div>
                                <div className={styles.endCouple}>10:30</div>
                            </div>
                        </div>
                    </div>

                    <div class="border-r-2 border-blue-600 absolute h-full left-1 md:left-32 top-2 z-10">
                        <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                    </div>

                    <div class="ml-10">
                        <div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Abril - Junio</div>
                            </div>
                            <div className="px-6 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                <h3
                                    className={
                                        "font-semibold text-gray-900 dark:text-white pt-8 bg-white text-3xl"
                                    }
                                >
                                    Математическое моделирование asd asd as da
                                </h3>
                                <p
                                    className={
                                        "text-xl mb-4 font-normal text-gray-500 dark:text-gray-400 bg-white"
                                    }
                                >
                                    Заиченко А Н ст. ФиФ ЛАБ 237ГЛ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end relative">
                    <div class="hidden md:block w-30">
                        <div class=" w-30">
                            <div className={styles.timeElement}>
                                <div className={styles.startCouple}>09:00</div>
                                <div className={styles.endCouple}>10:30</div>
                            </div>
                        </div>
                    </div>

                    <div class="border-r-2 border-blue-600 absolute h-full left-1 md:left-32 top-2 z-10">
                        <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                    </div>

                    <div class="ml-10">
                        <div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Abril - Junio</div>
                            </div>
                            <div className="px-6 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                <h3
                                    className={
                                        "font-semibold text-gray-900 dark:text-white pt-8 bg-white text-3xl"
                                    }
                                >
                                    Математическое моделирование
                                </h3>
                                <p
                                    className={
                                        "text-xl mb-4 font-normal text-gray-500 dark:text-gray-400 bg-white"
                                    }
                                >
                                    Заиченко А Н ст. ФиФ ЛАБ 237ГЛ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-5/12">
                <div className="relative mt-5 text-left">
                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className={styles.timeElement}>
                                <span className={styles.startCouple}>09:00</span>
                                <span className={styles.endCouple}>10:30</span>
                            </div>
                        </div>

                        <div className="border-r-2 border-blue-600 absolute h-full left-1 md:left-20 top-2 z-10">
                            <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                        </div>

                        <div className="ml-10">
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Abril - Junio</div>
                            </div>
                            <div className="px-6 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                <h3
                                    className={
                                        "font-semibold text-gray-900 dark:text-white pt-8 bg-white text-3xl"
                                    }
                                >
                                    Математическое моделирование
                                </h3>
                                <p
                                    className={
                                        "text-xl mb-4 font-normal text-gray-500 dark:text-gray-400 bg-white"
                                    }
                                >
                                    Заиченко А Н ст. ФиФ ЛАБ 237ГЛ
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className={styles.timeElement}>
                                <span className={styles.startCouple}>10:45</span>
                                <span className={styles.endCouple}>12:15</span>
                            </div>
                        </div>

                        <div className="border-r-2 border-blue-600 absolute h-full left-1 md:left-20 top-2 z-10">
                            <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                        </div>

                        <div className="ml-10">
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Julio - Agosto</div>
                            </div>
                            <div className="my-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                                Maecenas id ligula ac dui mollis tempor. Sed vitae ex
                                eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className={styles.timeElement}>
                                <span className={styles.startCouple}>13:15</span>
                                <span className={styles.endCouple}>14:45</span>
                            </div>
                        </div>

                        <div className="border-r-2 border-blue-600 absolute h-full left-1 md:left-20 top-2 z-10">
                            <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                        </div>

                        <div className="ml-10">
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Agosto - Hoy</div>
                            </div>
                            <div className="my-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                                Maecenas id ligula ac dui mollis tempor. Sed vitae ex
                                eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className={styles.timeElement}>
                                <span className={styles.startCouple}>13:15</span>
                                <span className={styles.endCouple}>14:45</span>
                            </div>
                        </div>

                        <div className="border-r-2 border-blue-600 absolute h-full left-1 md:left-20 top-2 z-10">
                            <div className="absolute w-5 h-5 bg-blue-600 rounded-full  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                        </div>

                        <div className="ml-10">
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Agosto - Hoy</div>
                            </div>
                            <div className="my-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                                Maecenas id ligula ac dui mollis tempor. Sed vitae ex
                                eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Shedule;
