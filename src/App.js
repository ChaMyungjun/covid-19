import React from "react";
import SideBar from "./components/public/SideBar/drawer";
import NewsList from "./components/News/list/newsList";
import Appbar from './components/template/Appbar/Appbar'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Appbar />
        <SideBar />
      </React.Fragment>
    );
  }
}

export default App;
