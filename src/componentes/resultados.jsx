import { useContext } from "react";
import GitCard from './gitCard';
import loader from "../img/loader.gif";
import {AppContextProvider} from "../context/fetchContext"
import notFound from "../img/404.png";


function Resultados(props){
    const {imagesGallery} = useContext(AppContextProvider);

    return(
        <div className="resultados">
            
            {props.loader ? (
                <div className="loader">
                {" "}
                    <img src={loader} alt="loader" />
                
                </div>
                
            ) :  <p><b> { props.searchResults === 0 ? <img src={notFound} alt="Not Found" /> :  props.searchTextResults==="" ? "! Ingrese el termino de busqueda ¡" : `Resultados de busqueda para: ${props.searchTextResults}` } </b></p> }

            
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