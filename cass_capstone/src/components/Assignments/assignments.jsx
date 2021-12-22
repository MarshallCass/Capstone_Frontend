import React from "react";
import "./assignments.css";
import { Link } from "react-router-dom";

const DisplayAssignments = (props) => {



    return (
        <div>
        <div className="newassignment">
            <Link to="/assignments_input">
            <button className="btn btn-outline-light btn-lg" type="button">New Assignment</button>
            </Link>
        </div>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Subject </th>
                        <th> Assignment </th>
                        <th> Description </th>
                        <th> Notes </th>
                    </tr>
                </thead>
                {props.assignments.map((assignment) => {
                    return (
                        <tbody>
                            <tr>                        
                                <td>{assignment.assignment_subject}</td>
                                <td>{assignment.assignment_name}</td>
                                <td>{assignment.assignment_description}</td>
                                <td>{assignment.assignment_notes}</td>
                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default DisplayAssignments;