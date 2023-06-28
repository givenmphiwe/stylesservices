import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Home } from "./components/home";
import { Contact } from "./components/contact";
import { About } from "./components/About-us";
import { Services } from "./components/Service";
import { Course } from "./components/course";
import { Training } from "./components/Training";
import { Placement } from "./components/Placement";
import ScrollToTop from "./ScrollToTop";
import { Booktraining } from "./components/Book-training";
import { TrainingLandin } from "./components/TrainingLandin";
import { BarmanTraining } from "./components/BarmanTraining";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "Contact", element: <Contact /> },
    { path: "About", element: <About /> },
    { path: "Service", element: <Services /> },
    { path: "Course", element: <Course /> },
    { path: "Training", element: <Training /> },
    { path: "Placement", element: <Placement /> },
    { path: "Booktraining", element: <Booktraining /> },
    { path: "TrainingLandin", element: <TrainingLandin /> },
    {path: "BarmanTraining", element: <BarmanTraining/> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
};

export default AppWrapper;

// i think the part of complete the part of the complete and do more is great and is noo more greater tha this..
