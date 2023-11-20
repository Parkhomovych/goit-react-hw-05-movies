import { searchFilmCredids } from 'components/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import defaultImage from '../images/imageNotFound1.jpeg';
import { Image, Item, List, Paragraf } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const location = useLocation();
  useEffect(() => {
    try {
      const data = async () => {
        const response = await searchFilmCredids(location.state.from);
        console.log(response);
        setCast([...response.cast]);
      };
      data();
    } catch (error) {}
  }, [location.state.from]);
  return (
    <List>
      {cast?.map(elem => (
        <Item key={elem.id}>
          <Image
            src={
              elem.profile_path
                ? `https://image.tmdb.org/t/p/w500/${elem.profile_path}`
                : defaultImage
            }
            alt={elem.title || elem.name || elem.original_title}
            width='220'
            height='330'
          />
          <Paragraf>{elem.name || elem.original_name}</Paragraf>
        </Item>
      ))}
    </List>
  );
};
