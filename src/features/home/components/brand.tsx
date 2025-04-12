import { Button } from '@mui/material';
import '../styles/brand.scss';
import { useNavigate } from '@tanstack/react-router';
export function Brand() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate({ to: '/make' });
  };
  return (
    <div className="brand">
      <span className="title">
        Powerful <span className="emphasize">icon</span> from now
      </span>
      <span className="subtitle">
        IconX is a powerful 🚀 icon generator.Your AI design partner for modern,
        professional-quality icons.
      </span>

      <div className="buttons">
        <Button variant="contained" size="large" onClick={handleGetStarted}>
          Get Started
        </Button>
        <Button variant="outlined" size="large">
          Learn More
        </Button>
      </div>
    </div>
  );
}
