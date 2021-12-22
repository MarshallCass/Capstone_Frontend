import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

const Home = (props) => {


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
                        <th> Username </th>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Email </th>
                        <th> Phone_Number </th>
                        <th> Address </th>
                        <th> Zipcode </th>
                    </tr>
                </thead>
                    <tbody>
                        {/* {props.users.map((user) => { 
                            return( 
                            <tr>                        
                                <td>{user.username}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.address}</td>
                                <td>{user.zipcode}</td>
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

export default Home;