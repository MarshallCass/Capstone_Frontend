import React from "react";
// import axios from "axios";
import "./grades.css";
// import jwtDecode from "jwt-decode";

const DisplayGrades = (props) => {



    //  const handleChange = async (productId) => {
    //      let token = localStorage.getItem("token")
    //      let user = jwtDecode(token);
    //      console.log(user)
 
    //      }


    return (
        <div>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Student </th>
                        <th> Grade </th>
                        <th> Assignment </th>
                        <th> Comments </th>
                    </tr>
                </thead>
                {props.grades.map((grade) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{grade.student_id}</td>
                                <td>{grade.grade}</td>
                                <td>{grade.assignment}</td>
                                <td>{grade.comments}</td>
                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default DisplayGrades;