import { useContext } from "react";
import GitCard from './gitCard';
import loader from "../img/loader.gif";
import {AppContextProvider} from "../context/fetchContext"

function Resultados(props){
    //let data = Array.from(props.imagenes);
    const {imagesGallery, setImagesGallery} = useContext(AppContextProvider);

    return(
        <div className="resultados">
            
            {props.loader ? (
                <div className="loader">
                {" "}
                <img src={loader} alt="loader" />
                </div>
            ) :  <p><b> { props.searchText==="" ? "! Ingrese el termino de busqueda ¡" : `Resultados de busqueda para: ${props.searchText}` }</b></p> }

            {/* { <p><b> { props.searchText===""? "! Ingrese el termino de busqueda ¡" : `Resultados de busqueda para: ${props.searchText}` }</b></p> } */}
            <div className={`resultados ${props.isDark && "dark"}`}>
            
                {   
                    imagesGallery.length > 0 && imagesGallery?.map((elemento, i) => {
                        return <GitCard key={i} image={elemento} />;
                    })
                }

            </div>
        </div>


    );
}

export default Resultados;