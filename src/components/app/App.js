import "../../index.css";

import styles from "./App.module.scss";
import Header from "../haeder/Header";
import Calendar from "../calendar/Calendar";
import Dropdown from "../dropdown/Dropdown";
import Shedule from "../shedule/Shedule";
import Footer from "../footer/Footer";
import { useRef, useState } from "react";
import Video from "../video/Video";
import videoStyles from "../video/Video.module.scss";

function App() {
    let today = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    let now = today.toLocaleString("ru-RU", options);
    const myRef = useRef(null);
    const flipPage = () => myRef.current.scrollIntoView({ behavior: "smooth" });

    const optionsWeekDay = { weekday: "short" };
    let weekDay = today.toLocaleString("ru-RU", optionsWeekDay);

    const [activeDay, setActiveDay] = useState(
        weekDay.charAt(0).toUpperCase() + weekDay.slice(1)
    );
    return (
        <>
            <Video flipPage={flipPage}></Video>
            <div className="container">
                <Header myRef={myRef}></Header>
                <main className={styles.main}>
                    <article className={styles.settings}>
                        <Calendar
                            setActiveDay={setActiveDay}
                            activeDay={activeDay}
                        ></Calendar>
                        <div className={styles.groupInformation}>
                            <div className={styles.groupElement}>
                                <span className={styles.groupText}>Первый курс</span>
                            </div>
                            <div className={styles.groupElement}>
                                <span className={styles.groupText}>ФИТУ</span>
                            </div>
                            <div className={styles.input_contauner}>
                                <input
                                    type="text"
                                    id="input"
                                    className={styles.input}
                                    placeholder="Группа"
                                    required
                                />
                            </div>
                        </div>
                    </article>
                    <article className={styles.content}>
                        <Shedule activeDay={activeDay}></Shedule>
                    </article>
                </main>
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
