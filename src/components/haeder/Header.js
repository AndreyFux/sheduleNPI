import styles from "./Header.module.scss";

let today = new Date();
const options = { weekday: "short", month: "short", day: "numeric" };
let now = today.toLocaleString("ru-RU", options);

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ЮРГПУ(НПИ)</div>
            <div className={styles.date}>
                {now.charAt(0).toUpperCase() + now.slice(1)}
            </div>
        </header>
    );
}

export default Header;
