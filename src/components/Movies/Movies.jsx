import { searchFindFilm } from 'components/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import defaultImage from '../images/imageNotFound1.jpeg';
import { Loader } from 'components/Loader/Loader';
import { Toaster, toast } from 'react-hot-toast';
import { Button, Form, Input } from './Movies.styled';
import {
  Image,
  LinkDetails,
  List,
  Paragraf,
} from 'components/Home/Home.styled';
export const Movies = () => {
  const [loader, setLoader] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    if (query === '') return;
    const data = async () => {
      try {
        setLoader(true);
        const response = await searchFindFilm(query);
        if (response.results.length === 0) {
          setFilms([]);
          toast('Not Found', {
            icon: '🔴',
          });
          return;
        }
        setFilms([...response.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    data();
  }, [query]);

  function submitFn(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.children.query;
    setSearchParams({ query: input?.value.trim().toLowerCase() });
    form.reset();
  }
  return (
    <>
      <Form onSubmit={submitFn}>
        <Input
          placeholder="Write the name of the movie"
          type="text"
          name="query"
        />
        <Button>Search</Button>
      </Form>
      {loader ? (
        <Loader />
      ) : (
        <List>
          {films.map(elem => (
            <li key={elem.id}>
              <LinkDetails to={`${elem.id}`}>
                <Image
                  src={
                    elem.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${
                          elem.poster_path || elem.backdrop_path
                        }`
                      : defaultImage
                  }
                  alt={elem.title || elem.name || elem.original_title}
                  width="250"
                  height="350"
                />
                <Paragraf>
                  {elem.title || elem.name || elem.original_title}
                </Paragraf>
              </LinkDetails>
            </li>
          ))}
        </List>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
