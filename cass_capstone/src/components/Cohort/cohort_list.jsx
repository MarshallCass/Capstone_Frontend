import React from "react";
import "./cohort.css";
import { Link } from "react-router-dom";

const DisplayCohort = (props) => {
  


    return (
        <div>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Cohort Name </th>
                        <th> Student </th>
                    </tr>
                </thead>
                <tbody>
                            <tr>          
                                {/* <td>{props.cohort.cohort_name}</td>
                                <td>{props.cohort.student}</td> */}
                                <td> Team Twister </td>
                                <td> Madison Jones </td>
                                <div className="student">
                                    <Link to="/StudentProfile">
                                        <button className="btn btn-outline-light btn-lg" type="Button">Student Profile</button>
                                    </Link>
                                </div>
                            </tr>
                       
                </tbody>
            </table>
            <div className="card-footer">
                <Link to="/NewCohort">
                    <button className="btn btn-outline-light btn-lg" type="button">New Cohort</button>
                </Link>
            </div>
        </div>
    );
};

export default DisplayCohort;