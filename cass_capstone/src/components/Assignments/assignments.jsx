import React from "react";
// import axios from "axios";
import "./assignments.css";
// import jwtDecode from "jwt-decode";

const DisplayAssignments = (props) => {



//      const handleChange = async (AssignmentId) => {
//          let token = localStorage.getItem("token")
//          let user = jwtDecode(token);
//          console.log(user)
//          let NewThing = {
//              UserId: user.id,
//              AssignmentId: assignment.id,
             
//          }
//          const response = await axios.post('https://localhost:44394/api/assignments/', NewThing, {headers: {Authorization: "Bearer " + token}});

// }

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
                {/* {props.assignements.map((assignment) => {    */}
                    return (
                        <tbody>
                            <tr>                        
                                {/* <td>{assignment.assignment_subject}</td>
                                <td>{assignment.assignment_name}</td>
                                <td>{assignment.assignment_description}</td>
                                <td>{assignment.assignment_notes}</td> */}
                                {/* <td><button className="btn btn-outline-light btn-lg" type="button" onClick={() => handleChange(assignment.id)}>Add Assignment</button></td> */}
                            </tr>              
                        </tbody>
                    )
                {/* })} */}
            </table>
        </div>
    );
};

export default DisplayAssignments;