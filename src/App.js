import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import {Home} from './components/home'
import { Contact } from "./components/contact";
import {About} from "./components/About-us"

const App = () => {
  let routes = useRoutes([
    
    { path: "/", element: <Home /> },
    { path: "Contact", element: <Contact />},
    { path: "About", element: <About />}

    
  ]);
  return routes;
};


const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;




// i think the part of complete the part of the complete and do more is great and is noo more greater tha this..