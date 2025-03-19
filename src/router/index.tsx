import {  Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import Home from "../pages/Home";


const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          const Component = Home;
          return (
            <Route
              key={routeItem.name}
              path={routeItem.path[0]}
              element={<Component />}
            />
          );
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
