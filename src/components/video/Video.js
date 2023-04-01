import video from "./videoplayback.mp4";
import stylesHeader from "../haeder/Header.module.scss";
import styles from "./Video.module.scss";
import { now } from '../../utils/today.js'
import React, { useState } from "react";
import { groups } from "../../groups";


function Video({ inputGroup, setInputGroup, flipPage, groups }) {
    const [isOpen, setIsOpen] = useState(false)

    const sorted = Object.entries(groups).filter((item) => {
        return item[0].includes(inputGroup)
    })

    return (
        <div className={styles.video_bg}>
            <video src={video} type="video/mp4" autoPlay muted loop></video>
            <div className={styles.effects}>
                <div className={stylesHeader.header + " header__content"}>
                    <div className={stylesHeader.logo + " fixclass"}>ЮРГПУ(НПИ)</div>
                    <div className={stylesHeader.date + " fixclass"}>
                        {now().charAt(0).toUpperCase() + now().slice(1)}
                    </div>
                </div>
            </div>
            <div className={styles.video_bg__content + ''}>
                <h1>Расписание занятий</h1>
                <div className={styles.blue_block}></div>
                <h1 className={styles.text_header}>Укажите необходимые данные</h1>
                <div className={styles.input_contauner}>
                    <input
                        value={inputGroup}
                        onChange={(e) => setInputGroup(e.target.value)}
                        // onClick={() => setIsOpen(prev => !prev)}
                        type="text"
                        id="first_name"
                        className={styles.input}
                        placeholder="Группа"
                        required
                    />
                </div>

                <ul className={styles.dropList}>
                    {
                        // isOpen &&
                        sorted.slice(0, 5).map((item) => (
                            <li key={item.id} onClick={() => setInputGroup(item[0])}>{item[0]}</li>
                        ))
                    }
                </ul>   
                <button onClick={flipPage} className={styles.button}>
                    Найти
                </button>
            </div>
        </div>
    );
}

export default Video;
