import { useNavigate } from 'react-router-dom';
import { Box, Button } from './NotFoundPage.styled';
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <h2 style={{ fontSize: '140px' }}>404</h2>
      <h3 style={{ fontSize: '32px' }}>Not Found</h3>
      <Button
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        go home
      </Button>
    </Box>
  );
};
