import { NavBar } from '@/common/presentation/components/navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import '@theme/theme.css';
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});
export const Route = createRootRoute({
  component: () => (
    <div className="light base">
      <NavBar />
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </div>
  ),
});
