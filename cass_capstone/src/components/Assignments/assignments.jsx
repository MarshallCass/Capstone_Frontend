import React from "react";
import "./assignments.css";

const DisplayAssignments = (props) => {




    return (
        <div>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Subject </th>
                        <th> Assignment </th>
                        <th> Description </th>
                        <th> Notes </th>
                    </tr>
                </thead>
                {props.assignements.map((assignment) => {
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