import Error404 from "../pages/404";
import ChooseDifficulties from "../pages/Choose_difficulties";
import Home from "../pages/Home";
import SignInPage from "../pages/Login";
const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path : "/login",
    exact: true,
    name: "Login",
    component: SignInPage,
  },
  {
    path:"/choose",
    name:"Choose",
    component:ChooseDifficulties
  },
  {
    path:"*",
    name:"Opps",
    component:Error404
  }
];

export default routes;
