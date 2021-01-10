import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import NewStory from "./pages/new-story/NewStory";
import Topics from "./pages/topics/Topics";

import Read from "./pages/read/Read"
function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/new-story"
        component={NewStory}
      />
      <Route exact path="/topics" component={Topics} />
      <Route exact path="/read/:slug" component={Read}/>
    </Router>
  );
}

export default App;
