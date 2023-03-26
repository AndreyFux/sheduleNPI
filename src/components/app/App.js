import "../../index.css";
import styles from "./App.module.scss";
import Header from "../haeder/Header";
import Calendar from "../calendar/Calendar";
import Dropdown from "../dropdown/Dropdown";
import Shedule from "../shedule/Shedule";
import Footer from "../footer/Footer";

function App() {
    return (
        <div className="container">
            <Header></Header>
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
    );
}

export default App;
