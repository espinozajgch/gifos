import {AppContextProvider} from "../context/fetchContext"
import {useFetch} from "../customHooks/useFetch"
import { useContext, useState } from "react";
import ImgBusqueda from "../img/logo.svg";

function Buscador({isDark, searchText, setSearchText, setSearchTrigger, suggest, setSuggest, setAutocompletar, setSearchTextResults, setSearchResults}){

    const {setImagesGallery} = useContext(AppContextProvider);

    const capturarBusqueda = (e) => {
		setSearchText(e.target.value);
        //setSearchTextResults(e.target.value);
        setSearchTrigger(false);
        setAutocompletar(true);    
	}

    const searchTrigger = () => {
        if(searchText!==""){
            //console.log("buscar");
            setSearchTrigger(true);
            setSuggest([]);
            setImagesGallery([]);
        }
    }

    const manejarClick = (e) => {
        if(searchText!==""){
            setAutocompletar(false);
            setSearchText(e);
            setSearchTextResults(e);
            setSearchTrigger(true);
            setSuggest([]);
            setImagesGallery([]);
            setSearchResults(-1);
        }
    };

    function onKeyUp(e) {
        var keycode = e.charCode;
        //console.log(event.charCode)
        if(keycode == '13'){
            manejarClick(e.target.value);
        }
      }

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
                    onKeyPress={onKeyUp}
                    placeholder="Busca gifs"
                    name="name"
                    type="text"
                />
                <button onClick={searchTrigger} className="btn-search">Buscar</button>
                {/* <button onClick={cleanButton} className="btn">X</button> */}
            
            </div>
                
            <div className="autocomplete">
                
                {suggest.map((sugerencia) => {
                    return (
                    <p key={sugerencia.name} className="autocomplete-item" onClick={() => manejarClick(sugerencia.name)}>
                        {" "}{sugerencia.name}{" "}
                    </p>
                    );
                })}
            </div>

            

        </div>
    );
}

export default Buscador;