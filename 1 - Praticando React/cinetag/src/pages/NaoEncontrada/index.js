import styles from './NaoEncontrada.module.css'

export default function NaoEncontrada(){
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>A pagina que você procura não foi encontrada :\</p>
        </section>
    )
}