import RouteList from "./Routelist";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

const links = ['Companies', 'Jobs'];

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
