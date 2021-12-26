import React from "react";
import "./cohort.css";
import { Link } from "react-router-dom";


const DisplayCohort = (props) => {


    return (
        <div>
        <div className="cohorts">
            <Link to="/Cohorts">
            <button className="btn btn-outline-light btn-lg" type="button">Cohorts</button>
            </Link>
        </div>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Cohort </th>
                        <th> Student </th>
                    </tr>
                </thead>
                <tbody>
                        {props.cohorts.map((cohort, index) => {
                            return(
                            <tr key={index}>                        
                                <td>{cohort.cohort_name}</td>
                                <Link to="/StudentProfile">
                                    <td>{cohort.student_id}</td>
                                </Link>
                            </tr>  
                            ) 
                        })}                 
                </tbody>
            </table>
        </div>
    );
};

export default DisplayCohort;