import { useParams, useLocation } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import "../Styles/SingleAlbum.scss";
import { useEffect } from "react";
const SingleAlbum = () => {
  const { id } = useParams();
  const { loading, state: photos } = useFetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`, undefined, []);
  const location = useLocation();
  const { title } = location.state;
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      {loading ? (
        <p className="text-center">Loading</p>
      ) : (
        <div className="photos">
          {photos.map((photo) => (
            <a href={photo.url} target="_blank" rel="noopener noreferrer" key={photo.id} className="photo_item">
              <img src={photo.thumbnailUrl} alt="random" />
              <h1 className="title font-size-12">{photo.title}</h1>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleAlbum;
