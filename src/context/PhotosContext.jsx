import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PhotosContext = createContext();

const URL = "./photos.json";

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await axios.get(URL);

      if (!response.status) {
        throw new Error("NO HAY DATOS");
      }
      const { photos: photosDB } = response.data;

      setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
      console.log(photosDB)
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <PhotosContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};
export default PhotosProvider;
