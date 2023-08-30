import RouteList from "./Routelist";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import './App.css';

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
