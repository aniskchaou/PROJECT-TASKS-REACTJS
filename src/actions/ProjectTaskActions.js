import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECT_TASKS,
  DELETE_PROJECT_TASK,
  GET_PROJECT_TASK
} from "./types";

//add task
export const addProjectTaskAction = (project_task, history) => async dispatch => {
  try {
  
    await axios.post("https://projet-tasks-spring.herokuapp.com/tasks/add", project_task);
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

export const deleteProjectTask = pt_id => async dispatch => {
  if (
    window.confirm(
      `You are deleting project task ${pt_id}, this action cannot be undone`
    )
  ) {
    await axios.delete(`https://projet-tasks-spring.herokuapp.com/tasks/delete/${pt_id}`);
    dispatch({
      type: DELETE_PROJECT_TASK,
      payload: pt_id
    });
  }
};

//get all tasks
export const getBackLog=()=> async dispatch =>{
    const res= await axios.get("https://projet-tasks-spring.herokuapp.com/tasks/all");
   
    dispatch({
        type:GET_PROJECT_TASKS,
        payload:res.data
    });
}

export const getProjectTask = (pt_id, history) => async dispatch => {
  try {
    const res = await axios.get(`https://projet-tasks-spring.herokuapp.com/tasks/${pt_id}`);
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data
    });
  } catch (error) {
    history.push("/");
  }
};