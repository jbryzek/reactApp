import React from 'react';
import './App.css';
import {Heading} from './components/Heading/Heading';
import {BrowserRouter as Router} from "react-router-dom";
import {Routing} from "./components/Routing";
import {NavBar} from "./components/NavBar";


function App() {
    return (
        <div className="App">
            <Heading title="Conference Schedule" variant="secondary"/>
            <Router>
                <NavBar/>
                <Routing/>
            </Router>
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;
