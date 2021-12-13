import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './Login/login';
import Register from './Registration/registration';
import NavBar from './NavBar/navbar.jsx'; 
import Home from './Profile/profile';
import CreateProduct from './Assignments/assignments'
import DisplayProducts from './Cohort/cohort';
import ShoppingCart from './Grades/grades'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Footer from './Footer/Footer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: null,
            students: [],
            grades: [],
            assignments: [],
            cohorts: [],
            jwt: "",
        };
    }
    
    componentDidMount() {
        
        const jwt = localStorage.getItem('token');
        this.getAllstudents()
        this.getAllgrades()
        this.getAllassignments()
        this.getAllCohorts()
        try {
            const user = jwtDecode(jwt);
            this.setState({loggedInUser: user });

        } catch (error) {
            console.log(error);
        }

    }

    registerNewUser = async (user) => {
        console.log("User object from Register: ", user)
        try{
            const response = await axios.post('https://localhost:44394/api/authentication', user);
            console.log(response)
            this.loggedInUser = ({'userName': user.username, 'password': user.password})
            window.location = ('/Login')

        }
        catch(error) {
            console.log(error, 'Invalid input');
        }
    }

    

    loginUser = async (login) => {
        console.log("User object from login:", login)
        try {
            let response = await axios.post('https://localhost:44394/api/authentication/login', login);
            this.setState({
                user: response.data.token
            });
            this.setState({
                jwt: response.data.token
            });
            localStorage.setItem('token', response.data.token);
            
            window.location = ('/Home')

        } catch (error) {
            alert('Invalid username or password')
        }
  
    }

    getAllStudent = async () => {
        let response = await axios.get('https://localhost:44394/api/Student/')
        this.setState({
            products: response.data
        });
    }

    addNewStudent = async (student) => {
        try{
            const response = await axios.post('https://localhost:44394/api/Student', student);
            console.log(response)
            this.student = ({'First Name': student.first_name, 'Last Name': student.last_name,'Address': student.address, 'Zipcode': student.zipcode})
            this.setState({
                students: response.data
            });
        }
        catch(error) {
            console.log(error, 'Invalid input');
        }
    }
    addNewCohort = async (cohort) => {
        try{
            const response = await axios.post('https://localhost:44394/api/Student', Student);
            console.log(response)
            this.cohort = ({'Cohort Name': cohort.cohort_name, 'Student': cohort.student.id})
            this.setState({
                cohort: response.data
            });
        }
        catch(error) {
            console.log(error, 'Invalid input');
        }
    }
     searchStudents = (results) => {
        this.setState({
            students: results
        })
    }
    searchAssignments = (results) => {
        this.setState({
            assignments: results
        })
    }
    searchCohorts = (results) => {
        this.setState({
            cohorts: results
        })
    }
 
 

    render() {
const user = this.state.loggedInUser
        return (
            <div>              
                <div>
                <NavBar user={user}/>
                </div>      
                <Switch>
                <Route path='/' exact={true} render={(props) => {
                    if (!user) {
                        return <Redirect to= '/Login' />
                    } else {
                        return <Redirect to= '/Home' />
                        }
                    }}
                />               
                
                <Route path='/Login' render={props => <Login {...props} loginUser={this.loginUser}/>} />
                <Route path='/Register' render={props => <Register {...props} registerNewUser={this.registerNewUser}/>} /> 
                <Route path='/Home' />              
                <Route path='/cohort' render={props => <DisplayCohorts {...props} cohorts={this.state.cohorts}/>} />               
                <Route path='/grades' render={props => <DisplayGrades {...props} grades={this.state.grades} />} />
                <Route path='/assignments' render={props => <DisplayAssignments {...props} assignments={this.state.assignments} />} />

               
                </Switch>
                <Footer/>
                
            </div>

        )
    }
}

export default App;
