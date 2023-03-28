import "../../index.css";
import "../test/styles.css";

import styles from "./App.module.scss";
import Header from "../haeder/Header";
import Calendar from "../calendar/Calendar";
import Dropdown from "../dropdown/Dropdown";
import Shedule from "../shedule/Shedule";
import Footer from "../footer/Footer";
import video from "./videoplayback.mp4";
import { useRef } from "react";
import stylesHeader from "../haeder/Header.module.scss";

function App() {
    let today = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    let now = today.toLocaleString("ru-RU", options);
    const myRef = useRef(null);

    const flipPage = () => myRef.current.scrollIntoView({ behavior: "smooth" });
    return (
        <>
            <div className="video-bg">
                <video src={video} type="video/mp4" autoPlay muted loop></video>
                <div className="effects">
                    <div className={stylesHeader.header + " header__content"}>
                        <div className={stylesHeader.logo + " fixclass"}>ЮРГПУ(НПИ)</div>
                        <div className={stylesHeader.date + " fixclass"}>
                            {now.charAt(0).toUpperCase() + now.slice(1)}
                        </div>
                    </div>
                </div>
                <div className="video-bg__content">
                    <h1>Расписание занятий</h1>
                    <div className="blue-block"></div>
                    <h1 className="text-header ">Укажите необходимые данные</h1>
                    <div className="input-container">
                        <input
                            type="text"
                            id="first_name"
                            className="border border-gray-300 text-white-900 text-xl rounded-lg focus:ring-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white "
                            placeholder="Группа"
                            required
                        />
                    </div>
                    <button
                        onClick={flipPage}
                        class="bg-blue-600 hover:bg-blue-700 text-6xl mt-8 font-bold py-3 px-16 rounded-full"
                    >
                        Найти
                    </button>
                </div>
            </div>

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
