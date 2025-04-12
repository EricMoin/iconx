import { createFileRoute } from '@tanstack/react-router';
import { MakeScreen } from '@/features/make/make_screen';
export const Route = createFileRoute('/make')({
  component: MakeScreen,
});
