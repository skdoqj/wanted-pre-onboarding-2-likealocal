import { createBrowserRouter } from 'react-router-dom';
import TravelListPage from 'pages/TravelListPage';
import mainLoader from './loader/mainLoader';
const router = createBrowserRouter([
  { path: '/', element: <TravelListPage />, loader: mainLoader },
]);
export default router;
