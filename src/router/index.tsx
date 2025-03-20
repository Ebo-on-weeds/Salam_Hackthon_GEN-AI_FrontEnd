import {  Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";


const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Routes>
        {routes.map((routeItem) => {
          const Component = routeItem.component;
          return (
            <Route
              key={routeItem.name}
              path={routeItem.path}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;
