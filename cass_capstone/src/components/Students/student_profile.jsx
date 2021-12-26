import React from "react";
import "./student.css";
import { Link } from "react-router-dom";

const StudentProfile = (props) => {

// Need to add student if any and students teacher


    return (
                 
<div className="container">
    <form className="form-studentPorfile">
        <div className="row">
            <div className="col">
                <div>
                <h1 className="fs-1 fw-bold mb-5 text">Student Profile</h1>
                </div>
                    <div className="d-grid gap-4">
                        <label className="fs-5 fw-normal">
                            Name: {props.user.first_name} {props.user.last_name}
                        </label>
                        <label className="fs-5 ">
                            Address: {props.student.address}
                        </label>
                        <label className="fs-5 fw-normal">
                            Zipcode: {props.student.zipcode}
                        </label>
                        <label className="fs-5 fw-normal">
                            Guardian: {props.student.guardian_one_id}
                        </label>
                        <label className="fs-5 fw-normal">
                            Guardian: {props.student.guardian_two_id}
                        </label>
                        <label className="fs-5 fw-normal">
                            Account Balance: {props.student.account_balance}
                        </label>
                    </div>
                    <br></br>
        <div className="card-footer">
            <Link to="/Parent">
                <button className="btn btn-outline-light btn-lg" type="button">Parents/Guardian</button>
            </Link>
        </div>
        </div>
        </div>
    </form>
</div>
    );
};

export default StudentProfile;