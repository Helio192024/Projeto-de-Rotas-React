import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default function CustomHeader() {
    return (
        <header className={style.header}>
            <Link to="/">
                <span>Mount Olympus</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/watch">Assistir</Link>
            </nav>
        </header >
    )
}
