import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


const NavBar = ({user}) => {

    const logoutUser = () => {
        localStorage.removeItem('token');
        window.location = ('/')
    }

    return (
<nav>
            
           {user && <h4> Welcome {user.username} </h4>}
            <ul>
                <React.Fragment>
                        <Link to ='/Home'> <li>Home</li> </Link>
                        <Link to ='/Cohort'> <li>Products</li> </Link>
                        <Link to ='/Assignments'> <li>Shopping Cart</li> </Link>
                        <Link to ='/Grades'> <li>Grades</li> </Link>
                        <Link onClick={() => logoutUser()}> <li> Logout </li></Link>
                        <SearchBar />
                </React.Fragment>
           
            {!user &&
                    <React.Fragment>
                        <Link to ='/Login'> <li>Login</li> </Link>
                        <Link to ='/Register'> <li>Register</li> </Link>                   
                    </React.Fragment>          
         
            }    
            </ul>
         
</nav>
    );
}

export default NavBar;