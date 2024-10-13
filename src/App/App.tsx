import { RouterProvider } from 'react-router-dom';
import router from '../services/router';
import { ThemeProvider } from '@gravity-ui/uikit';

const App = () => {
  return (
    <ThemeProvider theme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
