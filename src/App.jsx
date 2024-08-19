import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Router";
AOS.init();


const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
