import video from "./videoplayback.mp4";
import stylesHeader from "../haeder/Header.module.scss";
import styles from "./Video.module.scss";
import { now } from '../../utils/today.js'
import React, { useState } from "react";
import Select from "react-select";
import DropDownInput from '../DropDownInput'
function Video({ searchValue, setSearchValue, flipPage, groups }) {
    const [isOpen, setIsOpen] = useState(false)

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
                <DropDownInput placeHolder="Select..." options={options} isSearchable={true} searchValue={searchValue} setSearchValue={setSearchValue}></DropDownInput>
                <button onClick={flipPage} className={styles.button}>
                    Найти
                </button>
            </div>
        </div>
    );
}

export default Video;
