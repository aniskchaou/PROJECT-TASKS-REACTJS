import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import ProjectTasks from './components/ProjectTasks';
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddProjectTask from './components/AddProjectTask';
import { Provider } from "react-redux";
import store from "./redux/store";
import UpdateProjectTask from "./components/UpdateProjectTask"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={ProjectTasks} />
          <Route exact path="/addtask" component={AddProjectTask} />
          <Route exact path="/updatetask/:pt_id" component={UpdateProjectTask}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
