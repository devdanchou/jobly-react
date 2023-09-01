import RouteList from "./Routelist";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import './App.css';
import { useState, useEffect } from 'react';
import JoblyApi from './api.js';
import jwt_decode from "jwt-decode";



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

  const [user, setUser] = useState({ token: '', currentUser: null });

  // just for testing
  // useEffect(function loginWhenMounted() {
  //   async function login() {

  //     const token = await JoblyApi.login('testtest', 'password');

  //     console.log("App in login, token=", token);

  //     // decode
  //     // decoded: {username: 'testtest', isAdmin: false, iat: 1693603878}

  //     const decoded = jwt_decode(token);
  //     console.log('App in login after decode=', decoded);

  //     setUser({ token: token, currentUser: decoded });
  //   }

  //   login();
  // }, []);

  // pass login using context
  async function login() {

    const token = await JoblyApi.login('testtest', 'password');

    console.log("App in login, token=", token);

    // decode
    // decoded: {username: 'testtest', isAdmin: false, iat: 1693603878}

    const decoded = jwt_decode(token);
    console.log('App in login after decode=', decoded);

    setUser({ token: token, currentUser: decoded });
  }

  // login => token,
  // setUser({token: token})
  //  username<= decode(token)
  // signup
  // logout??
  // need to have function in api.js => set token: null, currentUser:null
  // edit
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currentUser={user.currentUser} />
        <RouteList />
        {/* <NavBar  currentUser={currentUser} />
         <RouteList  currentUser={currentUser}/>  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
