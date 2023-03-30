import video from "./videoplayback.mp4";
import stylesHeader from "../haeder/Header.module.scss";
import styles from "./Video.module.scss";

function Video(props) {
    let today = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    let now = today.toLocaleString("ru-RU", options);

    return (
        <div className={styles.video_bg}>
            <video src={video} type="video/mp4" autoPlay muted loop></video>
            <div className={styles.effects}>
                <div className={stylesHeader.header + " header__content"}>
                    <div className={stylesHeader.logo + " fixclass"}>ЮРГПУ(НПИ)</div>
                    <div className={stylesHeader.date + " fixclass"}>
                        {now.charAt(0).toUpperCase() + now.slice(1)}
                    </div>
                </div>
            </div>
            <div className={styles.video_bg__content}>
                <h1>Расписание занятий</h1>
                <div className={styles.blue_block}></div>
                <h1 className={styles.text_header}>Укажите необходимые данные</h1>
                <div className={styles.input_contauner}>
                    <input
                        type="text"
                        id="first_name"
                        className={styles.input}
                        placeholder="Группа"
                        required
                    />
                </div>
                <button onClick={props.flipPage} className={styles.button}>
                    Найти
                </button>
            </div>
        </div>
    );
}

export default Video;
