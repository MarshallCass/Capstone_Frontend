import React from "react";
import "./cohort.css";
import { Link } from "react-router-dom";

const DisplayCohorts = (props) => {

// Need Button beside student to link to student profile
// Button to list all students in cohort


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
                        {props.cohorts.map((cohort, index) => { 
                            return(  
                            <tr key={index}>          
                                <td>{cohort.cohort_name}</td>
                                <td>{cohort.student}</td>
                                <div className="cohort">
                                    <Link to="/Cohort">
                                        <button className="btn btn-outline-light btn-lg" type="button">Cohort</button>
                                    </Link>
                                </div>
                            </tr>
                            )              
                        })}
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

export default DisplayCohorts;