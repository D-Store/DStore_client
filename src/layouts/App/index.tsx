import useSWR from "swr";
import fetcher from "utils/fetcher";
import loadable from "@loadable/component";
import { Redirect, Route, Switch } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const PageLayout = loadable(() => import("layouts/PageLayout"));
const Login = loadable(() => import("pages/Login"));
const SignUp = loadable(() => import("pages/SignUp"));
const Create = loadable(() => import("pages/Create"));

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={Create} />
        <Route path="/template/:page" component={PageLayout} />
      </Switch>
      <ToastContainer />
    </div>
  );
};

export default App;
