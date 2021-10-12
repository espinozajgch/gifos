import React, { createContext, useState } from "react";

export const AppContextProvider = createContext();

const FetchContext = (props) => {
    const [imagesGallery, setImagesGallery] = useState([]); // bandera
  
    return(
        <AppContextProvider.Provider value={{imagesGallery, setImagesGallery}}>
            {props.children}
        </AppContextProvider.Provider>
    );
};

export default FetchContext;