import React, { Component } from "react";
import VideoGameList from "./components/VideoGameList";
import gamesList from "./data";

class App extends Component {
render() {
  return (
    <div className="App"> 
    <VideoGameList games={ gamesList } />
     </div>
    );
  }
}

export default App;