import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import ProjectTasks from './components/ProjectTasks';
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddProjectTask from './components/AddProjectTask';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ProjectTasks} />
        <Route exact path="/addtask" component={AddProjectTask} />
      </div>
    </Router>
  );
}

export default App;
