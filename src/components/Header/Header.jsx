import { MyLink, Navigation, StyledHeadre } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeadre>
      <Navigation>
        <MyLink to="/goit-react-hw-05-movies">Home</MyLink>
        <MyLink to="/movies">Movies</MyLink>
      </Navigation>
    </StyledHeadre>
  );
};
