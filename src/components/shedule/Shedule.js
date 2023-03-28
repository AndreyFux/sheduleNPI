import styles from "./Shedule.module.scss";
import { data } from "../../data.js";

function Shedule() {
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
                    <span className={styles.endCouples}>16:30</span>
                </div>
            </div>

            <ol className="w-4/12 flex flex-col  relative border-l border-blue-600 dark:border-gray-700">
                {data.map((replite) => {
                    return !Object.keys(replite).length ? (
                        <li key={Math.random()}>
                            <div className="mx-6 px-6 pb-6 m-10 bg-white rounded-3xl shadow-xl inline-block">
                                <div className="absolute w-5 h-5 bg-blue-600 rounded-full mt-3 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>

                                <h3 className="text-4xl font-semibold text-gray-900 dark:text-white pt-6 bg-white">
                                    Пары нет
                                </h3>
                            </div>
                        </li>
                    ) : (
                        <li key={Math.random()}>
                            <div className="mx-6 px-6 mt-0 mb-2 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                                <div className="absolute w-5 h-5 bg-blue-600 rounded-full mt-3 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white pt-8 bg-white">
                                    {replite.title}
                                </h3>
                                <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 bg-white">
                                    {replite.teacher + replite.classRoom + replite.type}
                                </p>
                            </div>
                        </li>
                    );
                })}
                {/* <li>
                    <div className="mx-6 px-6 mt-0 mb-2 pb-4 bg-white rounded-3xl shadow-xl inline-block">
                        <div className="absolute w-5 h-5 bg-blue-600 rounded-full mt-3 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white pt-8 bg-white">
                            Интелектуальные системы
                        </h3>
                        <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 bg-white">
                            Шкуропадский И.В. 218ЭН ПР
                        </p>
                    </div>
                </li>
                <li>
                    <div className="mx-6 px-6 pb-8 mb-6 m-10 bg-white rounded-3xl shadow-xl inline-block">
                        <div className="  absolute w-5 h-5 bg-blue-600 rounded-full mt-3 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>

                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white pt-6 bg-white">
                            Преддипломная практика
                        </h3>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 bg-white">
                            Бузало Н.C. 419ЛК ПР
                        </p>
                    </div>
                </li>
                <li>
                    <div className="mx-6 px-6 pb-6 m-10 mb-6 bg-white rounded-3xl shadow-xl inline-block">
                        <div className="absolute w-5 h-5 bg-blue-600 rounded-full mt-3 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white pt-6 bg-white">
                            Цифровые технологии математических исследований
                        </h3>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 bg-white">
                            Данилина Э.М. 202ЛК ЛАБ
                        </p>
                    </div>
                </li>
                <li>
                    <div className="mx-6 px-6 pb-6 m-10 bg-white rounded-3xl shadow-xl inline-block">
                        <div className="absolute w-5 h-5 bg-blue-600 rounded-full mt-3 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>

                        <h3 className="text-4xl font-semibold text-gray-900 dark:text-white pt-6 bg-white">
                            Пары нет
                        </h3>
                    </div>
                </li> */}
            </ol>
        </>
    );
}

export default Shedule;
