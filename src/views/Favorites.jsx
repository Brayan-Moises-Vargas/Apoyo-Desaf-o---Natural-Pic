import React, { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import IconHeart from "../components/IconHeart" 
import { Badge } from "react-bootstrap"

const Favorites = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  // Función para cambiar el estado 'isFavorite' de una foto
  const toggleFavorite = (photoId) => {

    const updatedPhotos = photos.map((photo) =>

      photo.id === photoId ? { ...photo, isFavorite: !photo.isFavorite } : photo

    );
    setPhotos(updatedPhotos);
  };

  // Filtrar solo las fotos favoritas
  const favoritePhotos = photos.filter((photo) => photo.isFavorite);

  return (
    <div>
    <h2>Fotos Favoritas</h2>
    {favoritePhotos.length === 0 ? (
      <p>No tienes fotos favoritas.</p>
    ) : (
      <div className="gallery grid-columns-5 p-3">
        {favoritePhotos.map((photo) => (
          <div
           key={photo.id}
           className="photo"
           style={{ backgroundImage: `url(${photo.src.large})` }}
           >
            
            <div onClick={() => toggleFavorite(photo.id)}>
              <IconHeart filled={true} /> {/* Mostrar el corazón lleno */}
            </div>
            <h6>
            <Badge bg="dark"> {photo.photographer}</Badge>
          </h6>
          </div>
        ))}
      </div>
    )}
  </div>
  )
};

export default Favorites;
