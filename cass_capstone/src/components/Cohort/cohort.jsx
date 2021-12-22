import React from "react";
// import axios from "axios";
import "./cohort.css";
// import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const DisplayCohorts = (props) => {




    return (
        <div>
        <div className="newcohort">
            <Link to="/cohort_input">
            <button className="btn btn-outline-light btn-lg" type="button">New Cohort</button>
            </Link>
        </div>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Cohort Name </th>
                        <th> Student </th>
                    </tr>
                </thead>
                    <tbody>
                        {props.cohorts.map((cohort) => { 
                            return(  
                            <tr>                        
                                <td>{cohort.name}</td>
                                <td>{cohort.student_id}</td>
                            </tr>
                            )              
                        })}
                    </tbody>
            </table>
        </div>
    );
};

export default DisplayCohorts;