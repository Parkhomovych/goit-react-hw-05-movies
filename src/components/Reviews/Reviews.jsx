import { searchFilmReviews } from 'components/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Reviews = () => {
  const notFound = <p>We dont't have any reviews for this movie</p>;
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  useEffect(() => {
    try {
      const data = async () => {
        const response = await searchFilmReviews(location.state.from);
        setReviews([...response.results]);
      };
      data();
    } catch (error) {}
  }, [location.state.from]);
  return (
    <>
      {reviews?.length !== 0 ? (
        <ul>
          {reviews?.map(elem => (
            <li key={elem.id}>
              <h3>{elem.author}</h3>
              <p>{elem.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        notFound
      )}
    </>
  );
};
