import './App.css';
import { useContext, useEffect, useState } from "react";
import Header from './componentes/header';
import Buscador from './componentes/buscador';
import Resultados from './componentes/resultados';
import {AppContextProvider} from "./context/fetchContext"
import {useFetch} from "./customHooks/useFetch"

function App() {
	
	const uri = {
		url : "https://api.giphy.com/v1/gifs/",
		search : "search",
		tags : "tags"
	}

	const notFound = {
		name : "No existen sugerencias para el termino de busqueda"
	}

	const [isDark, setDark] = useState(false); // bandera
	const [searchText, setSearchText] = useState("");
	
	const [searchTrigger, setSearchTrigger] = useState(false);
	const [searchResults, setSearchResults] = useState(-1);
	const [searchTextResults, setSearchTextResults] = useState("");

	const [suggest, setSuggest] = useState([]);
	const [autocompletar, setAutocompletar] = useState(true);

	const [loader, setLoader] = useState(false);

	const {setImagesGallery} = useContext(AppContextProvider);

	const cleanButton = () => {
        setSearchText("");
		setSearchTextResults("");
		setSuggest([]);
        setSearchTrigger(false);
		setImagesGallery([]);
		setLoader(false);
    }
	
	useEffect(() => {
		if(searchTrigger){
			setLoader(true);
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=jhC8BokZhB21P4LMtcfv4UZsaVwKuUBq&q=${searchText}&limit=20`)
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((data) => {
				setImagesGallery(data.data);
				setSearchResults(data.data.length ? data.data.length : 0);
			})
			.catch((error) => {
			console.log(error);
			})
			.finally(setLoader(false))
		}
	}, [searchTrigger]);/**/

	useEffect(() => {
		if(searchText.length > 1 && autocompletar){
			fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=jhC8BokZhB21P4LMtcfv4UZsaVwKuUBq&q=${searchText}&limit=5`)
			.then((respuesta) => {
				return respuesta.json();
			}) 
			.then((data) => {	
				setSuggest(data.data.length ? data.data : [notFound])
				console.log(data.data);
				//console.log(notFound);
			})
			.catch((error) => {
				console.log(error);
			});
		}
		else{
			setSuggest([]);
		}
	}, [searchText]);/**/

	return (
		<div className={`App ${isDark && "dark"}`}>
		<Header  resetear={cleanButton} isDark={isDark} setDark={setDark}/>
		<Buscador isDark={isDark} setSearchText={setSearchText} searchText={searchText} setSearchTrigger={setSearchTrigger} suggest={suggest} setSuggest={setSuggest} setAutocompletar={setAutocompletar} setSearchTextResults={setSearchTextResults} setSearchResults={setSearchResults}/***/ />
		<Resultados isDark={isDark} searchText={searchText} searchResults={searchResults} loader={loader} searchTextResults={searchTextResults} />
		</div>
	);
}

export default App;
