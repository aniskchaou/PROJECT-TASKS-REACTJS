import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECT_TASKS,
  DELETE_PROJECT_TASK,
  GET_PROJECT_TASK
} from "./types";

export const addProjectTask = (project_task, history) => async dispatch => {
  try {
    await axios.post("http://projet-tasks-spring.herokuapp.com/tasks/add", project_task);
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getBackLog=()=> async dispatch =>{
    const res= await axios.get("http://projet-tasks-spring.herokuapp.com/tasks/all");
    dispatch({
        type:GET_PROJECT_TASKS,
        payload:res.data
    });
}