import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = (user) => {
   

    const logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        window.location = ('/')
    }

    return (
        <nav>

            <ul>
            {user && 

                <React.Fragment>
                    <Link to="/Home"> <li>Home</li> </Link>
                    <Link to="/Cohorts"> <li>Cohorts</li> </Link>
                    <Link to="/Assignments"> <li>Assignments</li> </Link>
                    <Link to="/Grades"> <li>Grades</li> </Link>
                    <Link to='/' onClick={() => logoutUser()}> <li> Logout </li></Link>
                </React.Fragment>
            }
                {user &&
                    <React.Fragment>
                        <Link to="/Login"> <li>Login</li> </Link>
                        <Link to="/Register"> <li>Register</li> </Link>
                    </React.Fragment>
                }
            </ul>

        </nav>
    );
}

export default NavBar;