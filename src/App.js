 
import React from "react"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import NewStory from "./pages/new-story/NewStory"
function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/new-story" component={NewStory}/>
    </Router>
  );
}

export default App;
