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

import DropDownInput from '../DropDownInput'

function App() {

    let today = new Date();
    const options_for = { weekday: "short", month: "short", day: "numeric" };
    let now = today.toLocaleString("ru-RU", options_for);
    const [searchValue, setSearchValue] = useState("");
    const [currentShedule, setCurrentShedule] = useState({});
    const myRef = useRef(null);
    console.log(searchValue)
    useEffect(() => {
        const chosenGroup = Object.entries(groups).find((item) => item[0].toLowerCase() == searchValue.toLowerCase())
        console.log(`выбрал группу ${chosenGroup}`)
        if (chosenGroup) {
            axios.get(`/groups?faculty=${chosenGroup[1].faculty}&year=${chosenGroup[1].year}&group=${chosenGroup[1].group}`).then(res => {
                setCurrentShedule(res.data)
                console.log(`получил данные от ${chosenGroup[0]}`)
            })
        }
    }, [searchValue]);
    const flipPage = () => myRef.current.scrollIntoView({ behavior: "smooth" });
    const optionsWeekDay = { weekday: "short" };
    let weekDay = today.toLocaleString("ru-RU", optionsWeekDay);

    const [activeDay, setActiveDay] = useState(
        weekDay.charAt(0).toUpperCase() + weekDay.slice(1)
    );
    const sorted = Object.entries(groups).filter((item) => {

        return item[0].toLowerCase().includes(searchValue.toLowerCase())
    })
    const options = sorted.map((item) => {
        return {
            label: item[0],
            value: item[0].toLowerCase()
        }
    })
    return (
        <>
            <Video flipPage={flipPage} searchValue={searchValue} setSearchValue={setSearchValue} groups={groups}></Video>
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
                        <Shedule activeDay={activeDay} shedule={currentShedule}></Shedule>
                    </article>
                </main>
                <DropDownInput placeHolder="Select..." options={options.slice(0, 10)}></DropDownInput>
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
