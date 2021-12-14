import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {

    const logoutUser = () => {
        localStorage.removeItem('token');
        window.location = ('/')
    }

    return (
        <nav>

            {user && <h4> Welcome {user.username} </h4>}
            <ul>
                <React.Fragment>
                    <Link to='/Home'> <li>Home</li> </Link>
                    <Link to='/cohort'> <li>Cohorts</li> </Link>
                    <Link to='/assignments'> <li>Assignments</li> </Link>
                    <Link to='/grades'> <li>Grades</li> </Link>
                    <Link onClick={() => logoutUser()}> <li> Logout </li></Link>
                </React.Fragment>

                {!user &&
                    <React.Fragment>
                        <Link to='/login'> <li>Login</li> </Link>
                        <Link to='/register'> <li>Register</li> </Link>
                    </React.Fragment>
                }
            </ul>

        </nav>
    );
}

export default NavBar;