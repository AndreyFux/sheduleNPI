import "../../index.css";

import { useRef, useState } from "react";
import "../../index.css";
import Calendar from "../calendar/Calendar";
import Footer from "../footer/Footer";
import Header from "../haeder/Header";
import Shedule from "../shedule/Shedule";
import Video from "../video/Video";
import styles from "./App.module.scss";

import React, { useEffect } from "react";
import axios from '../../axios.js';
import { groups } from '../../groups';

function App() {
    let today = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    let now = today.toLocaleString("ru-RU", options);
    const [inputGroup, setInputGroup] = useState('');
    const [currentShedule, setCurrentShedule] = useState({});
    const myRef = useRef(null);

    useEffect(() => {
        const chosenGroup = Object.entries(groups).find((item) => item[0] == inputGroup)
        console.log(`выбрал группу ${chosenGroup}`)
        if (chosenGroup) {
            axios.get(`/groups?faculty=${chosenGroup[1].faculty}&year=${chosenGroup[1].year}&group=${chosenGroup[1].group}`).then(res => {
                setCurrentShedule(res.data)
                console.log(`получил данные от ${chosenGroup[0]}`)
            })
        }
    }, [inputGroup]);

    const flipPage = () => myRef.current.scrollIntoView({ behavior: "smooth" });

    const optionsWeekDay = { weekday: "short" };
    let weekDay = today.toLocaleString("ru-RU", optionsWeekDay);

    const [activeDay, setActiveDay] = useState(
        weekDay.charAt(0).toUpperCase() + weekDay.slice(1)
    );

    return (
        <>
            <Video flipPage={flipPage} inputGroup={inputGroup} setInputGroup={setInputGroup} groups={groups}></Video>
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
