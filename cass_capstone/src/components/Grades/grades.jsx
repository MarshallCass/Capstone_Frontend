import React from "react";
// import axios from "axios";
import "./grades.css";
// import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const DisplayGrades = (props) => {



    //  const handleChange = async (productId) => {
    //      let token = localStorage.getItem("token")
    //      let user = jwtDecode(token);
    //      console.log(user)
 
    //      }


    return (
        <div>
        <div className="newgrades">
            <Link to="/grades_input">
            <button className="btn btn-outline-light btn-lg" type="button">Add Grades</button>
            </Link>
        </div>
             
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Student </th>
                        <th> Grade </th>
                        <th> Assignment </th>
                        <th> Comments </th>
                    </tr>
                </thead>
                    <tbody>
                        {props.grades.map((grade) => {
                            return(   
                            <tr>                        
                                <td>{grade.student_id}</td>
                                <td>{grade.grade}</td>
                                <td>{grade.assignment}</td>
                                <td>{grade.comments}</td>
                            </tr>
                            )              
                        })}
                    </tbody>
            </table>
        </div>
    );
};

export default DisplayGrades;