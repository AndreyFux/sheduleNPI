import "../../index.css";

import styles from "./App.module.scss";
import Header from "../haeder/Header";
import Calendar from "../calendar/Calendar";
import Dropdown from "../dropdown/Dropdown";
import Shedule from "../shedule/Shedule";
import Footer from "../footer/Footer";
import { useRef } from "react";
import Video from "../video/Video";

function App() {
    let today = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    let now = today.toLocaleString("ru-RU", options);
    const myRef = useRef(null);

    const flipPage = () => myRef.current.scrollIntoView({ behavior: "smooth" });
    return (
        <>
            <Video flipPage={flipPage}></Video>
            <div className="container">
                <Header myRef={myRef}></Header>
                <main className={styles.main}>
                    <article className={styles.settings}>
                        <Calendar></Calendar>
                        <div>
                            <Dropdown name={"Курс"}></Dropdown>
                            <Dropdown name={"Факультет"}></Dropdown>
                            <Dropdown name={"Группа"}></Dropdown>
                        </div>
                    </article>
                    <article className={styles.content}>
                        <Shedule></Shedule>
                    </article>
                </main>
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
