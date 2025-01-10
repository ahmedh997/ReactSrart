import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';
import Layout from './components/Layout/Layout';


let router = createBrowserRouter([
  {
    path: '',
    element: <Layout />, children: [

      { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'portfolio', element: <Portfolio /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <Notfound /> },
    ]
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router}></RouterProvider>
}

export default App;

