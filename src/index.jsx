import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import './global.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from './pages/Error404';
import { CenterPage } from './pages/Pobocky';
import { CenterDetail } from './components/Detail';


const router = createBrowserRouter([{
  path:"/",
  element: <HomePage/>,
  errorElement: <Error/>,
  children: [
    {
      path: "/onas",
      element: <About/>
    },
    {
      path: "/kontakt",
      element: <Contact/>
    },
    {
      path:"/pobocky",
      element: <CenterPage/>
    }
  ]
  },
  {
    path:"/pobocky/:id",
    element: <CenterDetail/>
  }
])









createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);

