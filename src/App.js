import './App.css';
import { useContext, useEffect, useState } from "react";
import Header from './componentes/header';
import Buscador from './componentes/buscador';
import Resultados from './componentes/resultados';
import {AppContextProvider} from "./context/fetchContext"
import {useFetch} from "./customHooks/useFetch"

function App() {
	//const [imagesGallery, setImagesGallery] = useState([]); // bandera
	const [isDark, setDark] = useState(false); // bandera
	const [searchText, setSearchText] = useState("");
	
	const [searchTrigger, setSearchTrigger] = useState(false);
	const [searchResults, setSearchResults] = useState(0);

	const [suggest, setSuggest] = useState([]);
	const [autocompletar, setAutocompletar] = useState(true);

	const [loader, setLoader] = useState(false);

	const {imagesGallery, setImagesGallery} = useContext(AppContextProvider);

	const cleanButton = () => {
        setSearchText("");
		setSuggest([]);
        setSearchTrigger(false);
		setImagesGallery([]);
		setLoader(false);
    }
	
	/*function funFecth(url){
		fetch(url)
		.then((respuesta) => {
			//console.log(respuesta);
			return respuesta.json();
		})
		.then((data) => {
			return data;
			//setImagesGallery(data.data);
			//setSearchResults(data.data.length ? data.data.length : 0);
			//console.log(searchResults);
		})
		.catch((error) => {
		console.log(error);
		});
	}/***/

	useEffect(() => {
		console.log(searchTrigger);
		if(searchTrigger){
			setLoader(true);
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=jhC8BokZhB21P4LMtcfv4UZsaVwKuUBq&q=${searchText}&limit=20`)
			.then((respuesta) => {
				
				return respuesta.json();
			})
			.then((data) => {
				setImagesGallery(data.data);
				setSearchResults(data.data.length ? data.data.length : 0);
				console.log(searchResults);
				setLoader(false);
			})
			.catch((error) => {
			console.log(error);
			});
		}
	}, [searchTrigger]);/**/

	useEffect(() => {
		if(searchText.length > 1 && autocompletar){
			fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=jhC8BokZhB21P4LMtcfv4UZsaVwKuUBq&q=${searchText}&limit=5`)
			.then((respuesta) => {
				//console.log(respuesta);
				return respuesta.json();
			})
			.then((data) => {	
				setSuggest(data.data)
				//setImagesGallery(data.data);
				//setSearchResults(data.data.length ? data.data.length : 0);
				//console.log(data.data);
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
		<Buscador isDark={isDark} setSearchText={setSearchText} searchText={searchText} setSearchTrigger={setSearchTrigger} suggest={suggest} setSuggest={setSuggest} setAutocompletar={setAutocompletar} /***/ />
		<Resultados isDark={isDark} searchText={searchText} searchResults={searchResults} loader={loader}/>
		</div>
	);
}

export default App;
