import styles from "./Footer.module.scss";
import git from "../../images/github1.png";
import tg from "../../images/telegram.png";
import mail from "../../images/mail.png";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                Сайт созданный студентом для студентов
            </div>
            <div className={styles.links}>
                Информация и файл рассписания взят с сайта ЮРГПУ(НПИ)
            </div>
            <div className={styles.contacts}>
                Контакты для обратной связи
                <div className={styles.logoContainer}>
                    <a>
                        <img src={mail} className={styles.log} />
                    </a>
                    <a href="https://github.com/AndreyFux">
                        <img src={git} className={styles.log} />
                    </a>
                    <a href="https://t.me/kiit_mav">
                        <img src={tg} className={styles.log} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
