import { RotatingLines } from 'react-loader-spinner';
import { BoxLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <BoxLoader>
      <RotatingLines
        strokeColor="#ffa600"
        strokeWidth="4"
        animationDuration="0.65"
        width="124"
      />
    </BoxLoader>
  );
};
