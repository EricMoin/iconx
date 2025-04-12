import './styles/home_screen.scss';
import { Brand } from './components/brand';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/')({
  component: HomeScreen,
});

export function HomeScreen() {
  return (
    <div className="home-screen">
      <Brand />
    </div>
  );
}
