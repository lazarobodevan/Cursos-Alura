import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from '../../json/db.json'
import styles from './Player.module.css'
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

export default function Player(){
    const params = useParams();
    const [video, setVideo] = useState();

    useEffect(()=>{
        fetch(`http://localhost:3004/videos?id=${params.id}`)
            .then(res => res.json())
            .then((res) => {
                setVideo(...res);            
            }
        );
    },[])

    if(!video){
        return <NaoEncontrada/>
    }
    return(
        <>
            <Banner imagem="home"/>
            <Titulo>
                <h1>{video.titulo}</h1>
            </Titulo>
            <section>
                <iframe className={styles.container}
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                />
            </section>
        </>
    )
}