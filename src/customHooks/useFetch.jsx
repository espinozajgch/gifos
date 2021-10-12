import { useState, useEffect } from 'react';

export const useFetch = (url, searchTrigger) => {
    const [imagesGallery, setImagesGallery] = useState([]);

        useEffect(() => {
            if(searchTrigger){
                fetch(url)
                    .then((respuesta) => {
                        console.log(respuesta);
                        return respuesta.json();
                    })
                    .then((data) => {
                        setImagesGallery(data.data);
                        //setSearchResults(data.data.lenght);
                        //console.log("data: " + data);
                        //console.log("data: " + data.data[0].id);
                        })
                    .catch((error) => {
                        console.log(error);
                });
            }
        }, [searchTrigger]);/***/
    

    return imagesGallery;
}

//export default useFetch;