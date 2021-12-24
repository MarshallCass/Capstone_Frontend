import React from "react";
import "./cohort.css";
import { Link } from "react-router-dom";

const DisplayCohorts = (props) => {

// Need Button beside student to link to student profile


    return (
        <div>
        <div className="newcohort">
            <Link to="/NewCohort">
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
                        {props.cohorts.map((cohort, index) => { 
                            return(  
                            <tr key={index}>                        
                                <td>{cohort.cohort_name}</td>
                                <td>{cohort.student}</td>
                            </tr>
                            )              
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayCohorts;