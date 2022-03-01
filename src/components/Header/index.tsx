
import styles from "./styles.module.scss"
import {ActiveLink} from "../ActiveLink";

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content} >
                <img src="/logo.svg" alt="logo" />
                <nav>
                    <ActiveLink  activeClassName={styles.active} href="/">
                        <a> home</a>
                    </ActiveLink>
                    <ActiveLink href="/post" activeClassName={styles.active} >
                        <a  > posts</a>
                    </ActiveLink>

                </nav>
            </div>
        </header>
    )
}