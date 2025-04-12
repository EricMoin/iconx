import { createFileRoute } from '@tanstack/react-router';
import { HomeScreen } from '@features/home/home_screen';
export const Route = createFileRoute('/')({
  component: HomeScreen,
});
