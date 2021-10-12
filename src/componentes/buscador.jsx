import {AppContextProvider} from "../context/fetchContext"
import {useFetch} from "../customHooks/useFetch"
import { useContext, useState } from "react";
import ImgBusqueda from "../img/logo.svg";

function Buscador({isDark, searchText, setSearchText, setSearchTrigger, suggest, setSuggest, setAutocompletar}){

    const {imagesGallery, setImagesGallery} = useContext(AppContextProvider);
    //const [searchTextAnt, setSearchTextAnt] = useState("");

    const capturarBusqueda = (e) => {
		setSearchText(e.target.value);
        setSearchTrigger(false);
        setAutocompletar(true);
	}

    const searchTrigger = () => {
        if(searchText!==""){
            console.log("buscar");
            setSearchTrigger(true);
        }
    }

    const manejarClick = (e) => {
        console.log(e);
        setAutocompletar(false);
        setSearchText(e);
        setSearchTrigger(true);
        setSuggest([]);
        setImagesGallery([]);
      };

    return(
        <div className="buscador">
            <p>¡Inspirate y busca los mejores <b>GIFS!</b> </p>
            <div>
                <img src={ImgBusqueda} alt="imagen" />
            </div>

            <div className="buscador-form" >
                <input
                    className={`${isDark && "dark"}`}
                    autoComplete="off"
                    value={searchText}
                    onChange={capturarBusqueda}
                    placeholder="Busca gifs"
                    name="name"
                    type="text"
                />
                <button onClick={searchTrigger} className="btn-search">Buscar</button>
                {/* <button onClick={cleanButton} className="btn">X</button> */}
            
            </div>
                
            <div className="autocomplete">
                
                {suggest.map((nombre) => {
                    return (
                    <p key={nombre.name} className="autocomplete-item" onClick={() => manejarClick(nombre.name)}>
                        {" "}{nombre.name}{" "}
                    </p>
                    );
                })}
            </div>

            

        </div>
    );
}

export default Buscador;