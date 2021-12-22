import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './Login/login';
import Register from './Registration/register';
import UpdateRegister from './Profile/update_registration';
import NavBar from './NavBar/navbar.jsx';
import Home from './Profile/profile';
import DisplayAssignments from './Assignments/assignments';
import NewAssignment from './Assignments/assignment_input';
import DisplayCohorts from './Cohort/cohort';
import NewCohort from './Cohort/cohort_input';
import DisplayGrades from './Grades/grades';
import NewGrade from './Grades/grades_input';
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
        // this.getAllstudents()
        // this.getAllgrades()
        // this.getAllassignments()
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
    // getCurrentUser = async () => {
    //     let response = await axios.get('http://127.0.0.1:8000/api/auth/user/')
    //     this.setState({
    //         user: response.data
    //     })
    // }

    getAllStudents = async () => {
        let response = await axios.get('http://127.0.0.1:8000/students/students/')
        this.setState({
            students: response.data
        });
    }

    getAllAssignments = async () => {
        let response = await axios.get('http://127.0.0.1:8000/assignments/assignments/')
        console.log(response)
        this.setState({
            assignments: response.data
        });
    }

    addNewStudent = async (student) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/students/students/', student);
            console.log(response)
            this.student = ({ 'First Name': student.first_name, 
                            'Last Name': student.last_name, 
                            'Address': student.address, 
                            'Zipcode': student.zipcode 
                            })
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
            this.new_cohort = ({ 'Cohort Name': cohort.cohort_name, 'Student': cohort.student.id })
            this.setState({
                new_cohort: response.data
            });
        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
    }

    addNewAssignment = async (assignment) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/assignments/assignments/', assignment);
            console.log(response)
            this.new_assignment = ({ 'Assignment Subject': assignment.assignment_subject, 
                                     'Assignment Name': assignment.assignment_name,
                                     'Assignment Description' : assignment.assignment_description,  
                                     'Assignment Notes' : assignment.assignment_notes
                                   })
            this.setState({
                new_assignment: response.data
            });
        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
    }

    addNewGrade = async (grade) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/grades/grades/', grade);
            console.log(response)
            this.new_grade = ({ 'Student': grade.student, 
                              'Assignment': grade.assignment,
                              'Grade' : grade.grade,  
                               'Comments' : grade.comments
                               })
            this.setState({
                new_grade: response.data
            });
        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
    }

    
    UpdateRegister = async (user) => {
        console.log("User object from Register: ", user)
        try {
            const response = await axios.put('http://127.0.0.1:8000/api/auth/register/', user);
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
            
            window.location = ('/Home')

        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
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
                    <Route path='/Home' render={props => <Home {...props} profile={this.loginUser}/>} />
                    <Route path='/Cohort' render={props => <DisplayCohorts {...props} cohorts={this.state.cohorts} />} />
                    <Route path='/Grades' render={props => <DisplayGrades {...props} grades={this.state.grades} />} />
                    <Route path='/Assignments' render={props => <DisplayAssignments {...props} assignments={this.state.assignments} />} />
                    <Route path='/NewAssignment' render={props => <NewAssignment {...props} new_assignment={this.state.new_assignment} />} />
                    <Route path='/NewGrade' render={props => <NewGrade {...props} new_grade={this.state.new_grade} />} />
                    <Route path='/NewCohort' render={props => <NewCohort {...props} new_cohort={this.state.new_cohort} />} />
                    <Route path='/UpdateRegister' render={props => <UpdateRegister {...props} UpdateRegister={this.UpdateRegistration} />} />


                </Switch>
            </div>
        )
    }
}

export default App;
