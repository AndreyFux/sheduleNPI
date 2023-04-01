import styles from "./Header.module.scss";
import {now} from '../../utils/today.js'


function Header(props) {
    return (
        <header ref={props.myRef} className={styles.header}>
            <div className={styles.logo}>ЮРГПУ(НПИ)</div>
            <div className={styles.date}>
                {now().charAt(0).toUpperCase() + now().slice(1)}
            </div>
        </header>
    );
}

export default Header;
