import { MyLink, Navigation, StyledHeadre } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeadre>
      <Navigation>
        <MyLink to="/">Home</MyLink>
        <MyLink to="/movies">Movies</MyLink>
      </Navigation>
    </StyledHeadre>
  );
};
