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
            </ol>

            {/* <div className="md:w-2/3">
                <h1 className="font-bold italic mb-10">PROYECTOS</h1>

                <div className="relative mt-5 text-left">
                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className="font-bold italic">2020</div>
                            <div className="md:flex space-x-1 text-xs">
                                <div>Abr.</div>
                                <div>-</div>
                                <div>Jun.</div>
                            </div>
                        </div>

                        <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <div className="absolute w-5 h-5 bg-black rounded-full ml-1  -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                        </div>

                        <div className="ml-10">
                            <div className="font-bold">Proyecto 1</div>
                            <div className="italic md:mb-4">Empresa 1</div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Abril - Junio</div>
                            </div>
                            <div className="mb-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                                Maecenas id ligula ac dui mollis tempor. Sed vitae ex
                                eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className="font-bold italic">2020</div>
                            <div className="md:flex space-x-1 text-xs">
                                <div>Jul.</div>
                                <div>-</div>
                                <div>Ago.</div>
                            </div>
                        </div>

                        <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <div className="absolute w-5 h-5 bg-black rounded-full ml-1  -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                        </div>

                        <div className="ml-10">
                            <div className="font-bold">Proyecto 2</div>
                            <div className="italic md:mb-4">Empresa 2</div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Julio - Agosto</div>
                            </div>
                            <div className="mb-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                                Maecenas id ligula ac dui mollis tempor. Sed vitae ex
                                eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className="font-bold italic">2020</div>
                            <div className="md:flex space-x-1 text-xs">
                                <div>Ago.</div>
                                <div>-</div>
                                <div>Hoy.</div>
                            </div>
                        </div>

                        <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <div className="absolute w-5 h-5 bg-black rounded-full ml-1 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                        </div>

                        <div className="ml-10">
                            <div className="font-bold">Proyecto 3</div>
                            <div className="italic md:mb-4">Empresa 3</div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Agosto - Hoy</div>
                            </div>
                            <div className="mb-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                                Maecenas id ligula ac dui mollis tempor. Sed vitae ex
                                eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center relative">
                        <div className="hidden md:block w-20">
                            <div className="font-bold italic">2020</div>
                            <div className="md:flex space-x-1 text-xs">
                                <div>Ago.</div>
                                <div>-</div>
                                <div>Hoy.</div>
                            </div>
                        </div>

                        <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <div className="absolute w-5 h-5 bg-black rounded-full ml-1 -left-3 border border-white dark:border-gray-900 dark:bg-gray-700 "></div>
                        </div>

                        <div className="ml-10">
                            <div className="font-bold">Proyecto 3</div>
                            <div className="italic md:mb-4">Empresa 3</div>
                            <div className="mb-4 mt-2 md:hidden">
                                <div className="font-bold">2020</div>
                                <div className="text-xs">Agosto - Hoy</div>
                            </div>
                            <div className="mb-10">
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
