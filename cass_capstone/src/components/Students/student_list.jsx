import React from "react";
// import "./assignments.css";


const StudentDropdown = (props) => {




return(
                <select>
                        {props.students.map((student, index) => {
                            return(
                            <option key={index}                        
                                value={student.id}>
                                {student.first_name} {student.last_name}
                            </option>  
                            ) 
                        })}                 
                        {/* {props.assignments.map((assignment, index) =>{
                            return(
                                <option key={index}
                                value={assignment.id}>
                                    {assignment.assignment_name}
                                </option>
                            )
                        })} */}
                </select>

);
};

export default StudentDropdown;