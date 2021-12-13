import React from "react";
// import axios from "axios";
import "./cohort.css";
// import jwtDecode from "jwt-decode";

const DisplayCohorts = (props) => {



 


    return (
        <div>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Cohort Name </th>
                        <th> Student </th>
                    </tr>
                </thead>
                {props.cohorts.map((cohort) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{cohort.name}</td>
                                <td>{cohort.student_id}</td>

                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default DisplayCohorts;