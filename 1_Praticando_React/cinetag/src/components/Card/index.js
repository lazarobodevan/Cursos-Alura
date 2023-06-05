import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import {useFavoritoContext} from '../../contextos/Favoritos';
import { Link } from 'react-router-dom';

export default function Card({id, titulo, capa}){
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const isFavorito = favorito.some((fav)=>fav.id === id);
    const icon = isFavorito ? iconeDesfavoritar : iconeFavoritar;
    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa}/>
                <h2>{titulo}</h2>
            </Link>
            <img src={icon} 
                className={styles.favoritar}
                onClick={()=> adicionarFavorito({id, titulo, capa})}
                />
        </div>
    )
}