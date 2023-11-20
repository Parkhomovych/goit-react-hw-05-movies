import { searchFilmDetails } from 'components/Api';
import { NotFoundPage } from 'components/NotFoundPage/NotFoundPage';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import defaultImage from '../images/imageNotFound1.jpeg';
import {
  BoxContent,
  BoxInfo,
  Image,
  List,
  MyLink,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [loader, setloader] = useState(false);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    setloader(true);
    try {
      const data = async () => {
        const response = await searchFilmDetails(movieId);
        response ? setDetails({ ...response }) : setNotFound(true);
        setloader(false);
      };
      data();
    } catch (error) {
      console.log(error);
    } finally {
    }

    return () => {
      setNotFound(false);
    };
  }, [movieId]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : notFound ? (
        <NotFoundPage />
      ) : (
        <>
          <BoxContent>
            <Image
              src={
                details.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${details.poster_path}`
                  : defaultImage
              }
              alt={details.title || details.name || details.original_title}
              width="300"
            />
            <BoxInfo>
              <h2>{details.title || details.name || details.original_title}</h2>
              <p>{`User Score:${parseInt(details.vote_average * 10)}%`}</p>
              <h3>Owerview</h3>
              <p>{details.overview}</p>
              <h3>Genres</h3>
              <ul>
                {details?.genres?.map(elem => (
                  <li key={elem.id}>
                    <p>{elem.name}</p>
                  </li>
                ))}
              </ul>
            </BoxInfo>
          </BoxContent>
          <h3>Additional information</h3>
          <List>
            <li>
              <MyLink to="cast" state={{ from: details.id }}>
                Cast
              </MyLink>
            </li>
            <li>
              <MyLink to="reviews" state={{ from: details.id }}>
                Reviews
              </MyLink>
            </li>
          </List>
          <Outlet />
        </>
      )}
    </>
  );
};
