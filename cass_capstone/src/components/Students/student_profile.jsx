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
                            Name: Madison Jones{props.student.first_name} {props.student.last_name}
                        </label>
                        <label className="fs-5 ">
                            Address: 229 Candlewyck{props.student.address}
                        </label>
                        <label className="fs-5 fw-normal">
                            Zipcode: 17033{props.student.zipcode}
                        </label>
                        <label className="fs-5 fw-normal">
                            Account Balance: $13.50{props.student.account_balance}
                        </label>
                        <label className="fs-5 fw-normal">
                            Guardian: Mike Jones{props.student.guardian_one_id}
                            <li>Phone: 727-489-2871</li>
                            <li>Email: MJones@email.com</li>
                        </label>
                        <label className="fs-5 fw-normal">
                            Guardian: Lisa Jones{props.student.guardian_two_id}
                            <li>Phone: 717-555-1212</li>
                            <li>Email: LJones@email.com</li>
                        </label>
                        <Link to="/StudentUpdate">
                            <button className="btn btn-outline-light btn-lg" type="button">Student Grades</button>
                        </Link>
                    </div>
                    <br></br>
            <div className="card-footer">
                <Link to="/StudentUpdate">
                    <button className="btn btn-outline-light btn-lg" type="button">Update Student </button>
                </Link>
            </div>
        </div>
      </div>
    </form>
</div>
    );
};

export default StudentProfile;