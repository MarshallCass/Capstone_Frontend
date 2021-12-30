import React, { Component } from "react";
import "./cohort.css";
import { Link } from "react-router-dom";

class DisplayCohort extends Component {
        constructor(props) {
            super(props)
            this.state = {

        };
    }


    render (){

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
                        {this.props.cohorts.map((cohort, index) => { 
                            return(  
                            <tr key={index}>          
                                <td>{cohort.cohort_name}</td>
                                <td>{cohort.student}</td>
                                <div className="cohort">
                                    <button className="btn btn-outline-light btn-lg" type="Button">Cohort</button>
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
};

export default DisplayCohort;