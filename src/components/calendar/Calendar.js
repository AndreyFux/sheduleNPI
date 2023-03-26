import styles from "./Calendar.module.scss";

function Calendar() {
    return (
        <div className={styles.data}>
            <div className={styles.dataElement}>
                <div className={styles.dataContainer}>
                    <span className={styles.day}>Пн</span>
                </div>
                <div className={styles.dataContainer}>
                    <span>20</span>
                </div>
            </div>
            <div className={styles.dataElement}>
                <div className={styles.dataContainer}>
                    <span className={styles.day}>Вт</span>
                </div>
                <div className={styles.dataContainer}>
                    <span>21</span>
                </div>
            </div>
            <div className={styles.dataElement}>
                <div className={styles.dataContainer}>
                    <span className={styles.day}>Ср</span>
                </div>
                <div className={styles.dataContainer}>
                    <span>22</span>
                </div>
            </div>
            <div className={styles.dataElement}>
                <div className={styles.dataContainer}>
                    <span className={styles.day}>Чт</span>
                </div>
                <div className={styles.dataContainer}>
                    <span>23</span>
                </div>
            </div>
            <div className={styles.dataElement}>
                <div className={styles.dataContainer}>
                    <span className={styles.day}>Пт</span>
                </div>
                <div className={styles.dataContainer}>
                    <span>24</span>
                </div>
            </div>
            <div className={styles.active}>
                <div className={styles.dataContainer}>
                    <span className={styles.day}>Сб</span>
                </div>
                <div className={styles.dataContainer}>
                    <span>25</span>
                </div>
            </div>
            <div className={styles.dataElement}>
                <div className={styles.dataContainer}>
                    <span className={styles.day}>Вс</span>
                </div>
                <div className={styles.dataContainer}>
                    <span>26</span>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
