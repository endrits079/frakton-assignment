import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import "../Styles/Albums.scss";
const Albums = () => {
  const { loading, state: albums } = useFetch("https://jsonplaceholder.typicode.com/albums", undefined, []);
  useEffect(() => {
    document.title = "All Albums";
  });
  return (
    <div>
      <h1 className="albums_page-title">Albums Page</h1>

      {loading ? (
        <p className="text-center">Loading</p>
      ) : (
        <div className="albums">
          {albums.map((album) => (
            <Link to={{ pathname: `/album/${album.id}`, state: { title: album.title } }} key={album.id} className="album">
              <h1 className="title">{album.title}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Albums;
