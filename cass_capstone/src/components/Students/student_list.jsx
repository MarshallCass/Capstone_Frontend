import React from "react";
import "./student.css";
// import { Link } from 'react-router-dom';


const StudentList = (props) => {




return(

    <div>
        <table className="table-container">
                <thead>
                    <tr>
                        <th> Student </th>
                    </tr>
                </thead>
                <tbody>
                        {props.students.map((student, index) => {
                            return(
                            <tr key={index}>                        
                                {/* <Link to="/StudentProfile"> */}
                                    <td>{student.first_name}{student.last_name}</td>
                                {/* </Link> */}
                            </tr>  
                            ) 
                        })}                 
                </tbody>
            </table>
        </div>

);
};

export default StudentList;