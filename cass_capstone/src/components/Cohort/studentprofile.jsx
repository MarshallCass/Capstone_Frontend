import React from "react";
import "../Profile/profile.css";
import { Link } from "react-router-dom";

const StudentProfile = (props) => {

    //
    // Need to map and render Guardian Information
    //
    return (
                 
<div className="container">
    <form className="form-profile">
        <div className="row">
            <div className="col">
                <div>
                <h1 className="fs-2 fw-bold mb-5 text">Profile</h1>
                </div>
                <div>
                <thead>
                    <tr>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Address </th>
                        <th> Zipcode </th>
                        <th> Guardian One </th>
                        <th> Guardian Two </th>
                    </tr>
                </thead>
                    <tbody>
                        {/* {props.students.map((student) => { 
                            return( 
                            <tr>                        
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.address}</td>
                                <td>{student.zipcode}</td>
                                <td>{student.guardian_one}</td>
                                <td>{student.guardian_two}</td>
                            </tr>
                            )
                        })} */}
                    </tbody>
                </div>
            </div>
        </div>
        <div className="updateregistration">
            <Link to="/update_registration">
            <button className="btn btn-outline-light btn-lg" type="button">Update Info</button>
            </Link>
        </div>
    </form>
</div>
    );
};

export default StudentProfile;