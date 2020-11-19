import "./App.css";
import Home from "./pages/Home";
import Room from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Room} />
        <Route
          path="/rooms/:slug"
          exact
          render={(props) => <SingleRoom {...props} isAuth={true} />}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
