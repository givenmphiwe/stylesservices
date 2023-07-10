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
import { BarmanTraining } from "./components/TrainingComponents/BarmanTraining";
import { Login } from "./components/login"
import { BarmanIntro } from "./components/TrainingComponents/Barman-intro";
import { HealthIntro } from "./components/TrainingComponents/Health-intro";
import { HygeineIntro } from "./components/TrainingComponents/Hygeine";
import { HousekeepingIntro } from "./components/TrainingComponents/housekeepin-intro";
import { WaiterIntro } from "./components/TrainingComponents/Waiter-intro";
import { WaiterOne } from "./components/TrainingComponents/Waiter/waiter-one";
import { WaiterTwo } from "./components/TrainingComponents/Waiter/waiter-two";
import { WaiterThree } from "./components/TrainingComponents/Waiter/waiter-three";
import { WaiterFive } from "./components/TrainingComponents/Waiter/waiter-five";
import { WaiterFour } from "./components/TrainingComponents/Waiter/waiter-four";
import { WaiterSix } from "./components/TrainingComponents/Waiter/waiters-six";
import { WaiterSeven } from "./components/TrainingComponents/Waiter/waiter-seven";
import { WaiterEight } from "./components/TrainingComponents/Waiter/waiter-eight";

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
    { path: "BarmanTraining", element: <BarmanTraining/> },
    { path: "login", element: <Login/> },
    { path: "Barmanintro", element: <BarmanIntro/> },
    { path: "Healthintro", element: <HealthIntro/>},
    { path: "Waiterintro", element: <WaiterIntro/> },
    { path: "Housekeepingintro", element: <HousekeepingIntro/>},
    { path: "Hygeineintro", element: <HygeineIntro/> },
    { path: "Waiter-one", element: <WaiterOne/>},
    { path: "Waiter-two", element: <WaiterTwo/>},
    { path: "Waiter-three", element: <WaiterThree/>},
    { path: "Waiter-four", element: <WaiterFour/>},
    { path: "Waiter-five", element: <WaiterFive/>},
    { path: "Waiter-six", element: <WaiterSix/>},
    { path: "Waiter-seven", element: <WaiterSeven/>},
    { path: "Waiter-eight", element: <WaiterEight/>},




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
