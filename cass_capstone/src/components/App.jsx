import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './Login/login';
import Register from './Registration/register';
import NavBar from './NavBar/navbar.jsx';
import Home from './Profile/profile';
import DisplayAssignments from './Assignments/assignments'
import DisplayCohorts from './Cohort/cohort';
import DisplayGrades from './Grades/grades'
import jwtDecode from 'jwt-decode';
import axios from 'axios';


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
        this.loggedInUser()
        // this.getAllstudents()
        // this.getAllgrades()
        this.getAllassignments()
        // this.getAllCohorts()
        try {
            const user = jwtDecode(jwt);
            this.setState({ loggedInUser: user });

        } catch (error) {
            console.log(error);
        }

    }

    registerNewUser = async (user) => {
        console.log("User object from Register: ", user)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', user);
            console.log(response)
            this.loggedInUser = ({ 
                'userName': user.username, 
                'password': user.password, 
                'email': user.email, 
                'firstname': user.first_name, 
                'lastname': user.last_name, 
                'address': user.address, 
                'zipcode': user.zipcode, 
                'phone_number': user.phone_number,
                'is_parent': user.is_parent, 
                'is_staff': user.is_staff, 
                'is_teacher': user.is_teacher,
                'is_superuser': user.is_superuser,
                'room_number' : user.room_number
            })
            
            window.location = ('/Login')

        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
    }



    loginUser = async (login) => {
        console.log("User object from login:", login)
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', login);
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

    getAllStudents = async () => {
        let response = await axios.get('http://127.0.0.1:8000/students/students/')
        this.setState({
            students: response.data
        });
    
    }
    loggedInUser = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/auth/user/')
        this.setState({
            user: response.data
        })
    }

    addNewStudent = async (student) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/students/students/', student);
            console.log(response)
            this.student = ({ 'First Name': student.first_name, 'Last Name': student.last_name, 'Address': student.address, 'Zipcode': student.zipcode })
            this.setState({
                students: response.data
            });
        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
    }
    addNewCohort = async (cohort) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/cohorts/cohorts/', cohort);
            console.log(response)
            this.cohort = ({ 'Cohort Name': cohort.cohort_name, 'Student': cohort.student.id })
            this.setState({
                cohort: response.data
            });
        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
    }
    
    getAllAssignments = async () => {
        let response = await axios.get('http://127.0.0.1:8000/assignments/assignments/')
        this.setState({
            assignments: response.data
        });
    
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

                <NavBar user={user} />

                <Switch>

                    <Route path='/' exact={true} render={(props) => {
                        if (!user) {
                            return <Redirect to='/Login' />
                        } else {
                            return <Redirect to='/Home' />
                        }
                    }}
                    />
                    <Route path='/Login' render={props => <Login {...props} loginUser={this.loginUser} />} />
                    <Route path='/Register' render={props => <Register {...props} registerNewUser={this.registerNewUser} />} />
                    <Route path='/Profile' render={props => <Home {...props} profile={this.loggedInUser}/>} />
                    <Route path='/Cohort' render={props => <DisplayCohorts {...props} cohorts={this.state.cohorts} />} />
                    <Route path='/Grades' render={props => <DisplayGrades {...props} grades={this.state.grades} />} />
                    <Route path='/Assignments' render={props => <DisplayAssignments {...props} assignments={this.getAllAssignments} />} />
                </Switch>
            </div>
        )
    }
}

export default App;
