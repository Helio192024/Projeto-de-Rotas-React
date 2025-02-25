import Footer from '../../components/Footer';
import erro406 from './erro406.png';
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
    return (
        <>
            <header />
            <section className={styles.container}>
                <h1>Ops !  Conteúdo não Localizado</h1>
                <img src={erro406} alt="Logo de Página n0ão Localizada " />
            </section>
            <Footer />
        </>
    );
}
