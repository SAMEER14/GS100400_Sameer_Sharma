import './App.css'
import './components/Navbar';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import StorePage from './components/StorePage';
import SkuPage from './components/SkuPage';
import ChartsPage from './components/ChartsPage';
import PlanningPage from './components/PlanningPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from './components/Body';


const appRouter = createBrowserRouter([
  { path: "/", element: <Body /> },
  { path: "/store", element: <StorePage /> },
  { path: "/sku", element: <SkuPage /> },
  { path: "/planning", element: <PlanningPage /> },
  { path: "/charts", element: <ChartsPage /> },
]);

function App() {
  return (
      <div>
      <Navbar />
      <RouterProvider router={appRouter} />
      {/* <Sidebar /> */}
    </div>
    
  )
}

export default App
