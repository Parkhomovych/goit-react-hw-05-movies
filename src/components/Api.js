import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers:
    'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTU0Y2MyZWE4MDM1Y2Q1YzFmOGJkYmM3NzdhZjkwZSIsInN1YiI6IjY1NTc5YmMxZDA1MWQ5MDExZGI0ZDFlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SeEx5bErEaFqBQAH7w0j1ywnp8wbC6txCDSGl3O6aMw',
});
export const searchAllDay = async () => {
  const all = 'trending/all/week'; //список найпопулярніших фільмів на сьогодні
  try {
    const response = await instance.get(all);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const searchFindFilm = async query => {
  const serchFilm = `search/movie?query=${query}`; //пошук фільму за ключовим словом
  try {
    const response = await instance.get(serchFilm);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const searchFilmDetails = async id => {
  const details = `movie/${id}`; //запит повної інформації про фільм
  try {
    const response = await instance.get(details);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchFilmCredids = async id => {
  const credits = `movie/${id}/credits`; //aкторський склад
  try {
    const response = await instance.get(credits);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const searchFilmReviews = async id => {
  const reviews = `movie/${id}/reviews`; //запит оглядів
  try {
    const response = await instance.get(reviews);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
