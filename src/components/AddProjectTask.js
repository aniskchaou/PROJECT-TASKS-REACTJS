import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class AddProjectTask extends Component {
    constructor()
    {
        super()
        this.state={
            summary:"",
            acceptanceCriteria:"",
            status:""
        }
    }
    render() {
        return (
            <div className="addProjectTask">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/" className="btn btn-light">
                            Back to Board
                        </Link>
                        <h4 className="display-4 text-center">Add /Update Project Task</h4>
                        <form>
                            <div className="form-group">
                                <input value={this.state.summary} type="text" className="form-control form-control-lg" name="summary" placeholder="Project Task summary" />
                            </div>
                            <div className="form-group">
                                <textarea value={this.state.acceptanceCriteria} className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria"></textarea>
                            </div>
                            <div className="form-group">
                                <select value={this.state.status} className="form-control form-control-lg" name="status">
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}