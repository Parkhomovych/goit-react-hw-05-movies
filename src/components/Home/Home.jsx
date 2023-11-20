import { searchAllDay } from 'components/Api';
import { useEffect, useState } from 'react';
import { Image, LinkDetails, List, Paragraf } from './Home.styled';
import defaultImage from '../images/imageNotFound1.jpeg';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [loader, setloader] = useState(false);
  useEffect(() => {
    try {
      setloader(true);
      const data = async () => {
        const response = await searchAllDay();
        setFilms([...response.results]);
        setloader(false);
      };
      data();
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, []);

  return (
    <section>
      {loader ? (
        <Loader />
      ) : (
        <List>
          {films.map(
            ({
              id,
              poster_path,
              backdrop_path,
              title,
              original_title,
              original_name,
              name,
            }) => (
              <li key={id}>
                <LinkDetails to={`movies/${id}`}>
                  <Image
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${
                            poster_path || backdrop_path
                          }`
                        : defaultImage
                    }
                    alt={`${title}`}
                    width="250"
                    height="350"
                  />
                  <Paragraf>
                    {title || name || original_name || original_title}
                  </Paragraf>
                </LinkDetails>
              </li>
            )
          )}
        </List>
      )}
    </section>
  );
};
