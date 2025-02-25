import { Link } from "react-router-dom";
import styles from "./Card.module.css"

function Card({ id, title }) {
    return (
        <section className={styles.card}>
            <span>
                {title}
            </span>
            <Link to={`/watch/${id}`}
                href={`https://www.youtube.com/watch?v=${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/default.jpg`}
                    alt="Capa" />
            </Link>
        </section>
    );

}
export default Card;