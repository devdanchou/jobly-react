import RouteList from "./Routelist";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import './App.css';

//TODO: make link all lowercase
const links = ['Companies', 'Jobs'];

/**
 * App to initialize jobly
 *
 * state: none
 *
 * props: none
 *
 * App -> {RouteList, NavBar}
 *
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar links={links} />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
