import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

const Home = (props) => {

// Need to add student if any and students teacher


    return (
                 
<div className="container">
    <form className="form-newCohort">
        <div className="row">
            <div className="col">
                <div>
                <h1 className="fs-1 fw-bold mb-5 text">User Profile</h1>
                </div>
                    <div className="d-grid gap-4">
                        <label className="fs-5 fw-normal">
                            Username: {props.user.username}
                        </label>
                        <label className="fs-5 fw-normal">
                            Name: {props.user.first_name} {props.user.last_name}
                        </label>
                        <label className="fs-5 ">
                            Email: {props.user.email}
                        </label>
                        <label className="fs-5 fw-normal">
                            Phone Number: {props.user.phone_number}
                        </label>
                        <label className="fs-5 fw-normal">
                            Address: {props.user.address}
                        </label>
                        <label className="fs-5 fw-normal">
                            Zipcode: {props.user.zipcode}
                        </label>
                        <label className="fs-5 fw-normal">
                            Student: Mason Cass
                            <li>Teacher: Patti Kay</li>
                            <li>Email: Pk@email.com</li>
                        </label>
                        <label className="fs-5 fw-normal">
                            Account Balance: $26.00
                        </label>
                        <Link to="/">
                            <button className="btn btn-outline-light btn-lg" type="button">Student Grades</button>
                        </Link>
                    </div>
                    <br></br>
        <div className="card-footer">
            <Link to="/UpdateRegister">
                <button className="btn btn-outline-light btn-lg" type="button">Update Info</button>
            </Link>
        </div>
        </div>
        </div>
    </form>
</div>
    );
};

export default Home;