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
import DisplayCohorts from './Cohort/cohorts';
import DisplayCohort from './Cohort/cohort_list';
import NewCohort from './Cohort/cohort_input';
import DisplayGrades from './Grades/grades';
import NewGrade from './Grades/grades_input';
import StudentProfile from './Students/student_profile';
import StudentDropdown from './Students/student_list';
import NewStudent from './Students/student_input';
import SearchBar from './SearchBar/searchbar';
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
            user: [],
            currentUser: [],
        };
    }

    componentDidMount() {

        const jwt = localStorage.getItem('token');
        this.getAllStudents()
        this.getAllGrades()
        this.getAllAssignments()
        this.getAllCohorts()
        this.getUserInfo()
        this.searchStudents()
        try {
            const user = jwtDecode(jwt);
            this.setState({ loggedInUser: user });
            console.log("User Info", user)
        } catch (error) {
            console.log(error);
        }
    }

    registerNewUser = async (user) => {
        console.log("User object from Register: ", user)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', user);
            console.log(response)
            this.registerNewUser = ({ 
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
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', login);
            this.setState({
                user: jwtDecode(response.data.access)
            });
            this.setState({
                jwt: response.data.access
            });
            localStorage.setItem('token', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            window.location = ('/Home')
        } catch (error) {
            alert('Invalid username or password')
        }
    }
    
    getUserInfo = async () => {
        const jwt = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8000/api/auth/user/${user.id}', {Headers: {Authorization: 'Bearer' + jwt}});
        console.log('Logged In info', response.data)
        this.setState({
            user: response.data
        });
    }

    getAllGrades = async () => {
        const jwt = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8000/grades/grades/', {Headers: {Authorization: 'Bearer' + jwt}});
        console.log(response)
        this.setState({
            grades: response.data
        });
    }

    getAllCohorts = async () => {
        const jwt = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8000/cohorts/cohorts/', {Headers: {Authorization: 'Bearer' + jwt}});
        console.log(response)
        this.setState({
            cohorts: response.data
        });
    }

    getAllStudents = async () => {
        const jwt = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8000/students/students/', {Headers: {Authorization: 'Bearer' + jwt}});
        console.log(response)
        this.setState({
            students: response.data
        });
    }

    getAllAssignments = async () => {
        const jwt = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8000/assignments/assignments/', {Headers: {Authorization: 'Bearer' + jwt}});
        console.log(response)
        this.setState({
            assignments: response.data
        });
    }

    getCohort = async () => {
        const jwt = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8000/cohorts/cohorts/${cohort.id}', {Headers: {Authorization: 'Bearer' + jwt}});
        console.log(response)
        this.setState({
            cohort: response.data
        });
    }

    getStudent = async () => {
        const jwt = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8000/students/students/${student.id}', {Headers: {Authorization: 'Bearer' + jwt}});
        console.log(response)
        this.setState({
            student: response.data
        });
    }

    addNewStudent = async (student) => {
        try {
            const jwt = localStorage.getItem('token')
            const response = await axios.post('http://127.0.0.1:8000/students/students/', student, {Headers: {Authorization: 'Bearer' + jwt}});
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
            const jwt = localStorage.getItem('token')
            const response = await axios.post('http://127.0.0.1:8000/cohorts/cohorts/', cohort, {Headers: {Authorization: 'Bearer' + jwt}});
            console.log(response)
            this.cohort = ({ 'Cohort Name': cohort.cohort_name, 'Student': cohort.student.id })
            this.setState({
                cohorts: response.data
            });
        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
    }

    addNewAssignment = async (assignment) => {
        try {
            const jwt = localStorage.getItem('token')
            const response = await axios.post('http://127.0.0.1:8000/assignments/assignments/', assignment, {Headers: {Authorization: 'Bearer' + jwt}});
            console.log(response)
            this.assignment = ({ 'Assignment Subject': assignment.assignment_subject, 
                                    'Assignment Name': assignment.assignment_name,
                                    'Assignment Description' : assignment.assignment_description,  
                                    'Assignment Notes' : assignment.assignment_notes
                                   })
            this.setState({
               assignments: response.data
            });
        }
        catch (error) {
            console.log(error, 'Invalid input');
        }
    }

    addNewGrade = async (grade) => {
        try {
            const jwt = localStorage.getItem('token')
            const response = await axios.post('http://127.0.0.1:8000/grades/grades/', grade, {Headers: {Authorization: 'Bearer' + jwt}});
            console.log(response)
            this.new_grade = ({'Student': grade.student, 
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

    updateRegister = async (user) => {
        console.log("User object from Register: ", user)
        try {
            const jwt = localStorage.getItem('token')
            const response = await axios.put('http://127.0.0.1:8000/api/auth/register/', user, {Headers: {Authorization: 'Bearer' + jwt}});
            console.log(response)
            this.updateRegister = ({ 
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

    searchStudents = (results) => {
        this.setState({
            students: results
        })
    }
    
    render() {
        const user = this.state.loggedInUser
        return (
            <div>
                <NavBar user={user} />
                <SearchBar searchStudents={this.searchStudents}/>
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
                    <Route path='/Register' render={props => <Register {...props} registerNewUser={this.state.registerNewUser} />} />
                    <Route path='/Home' render={props => <Home {...props} user={this.state.user}/>} />
                    <Route path='/Cohorts' render={props => <DisplayCohorts {...props} cohorts={this.state.cohorts} />} />
                    <Route path='/Cohort' render={props => <DisplayCohort {...props} cohort={this.state.cohort} />} />
                    <Route path='/Grades' render={props => <DisplayGrades {...props} grades={this.state.grades} />} />
                    <Route path='/Assignments' render={props => <DisplayAssignments {...props} assignments={this.state.assignments} />} />
                    <Route path='/NewAssignment' render={props => <NewAssignment {...props} addNewAssignment={this.addNewAssignment}/>} />
                    <Route path='/NewGrade' render={props => <NewGrade {...props} new_grade={this.state.new_grade} />} />
                    <Route path='/NewCohort' render={props => <NewCohort {...props} addNewCohort={this.addNewCohort} />} />
                    <Route path='/UpdateRegister' render={props => <UpdateRegister {...props} updateRegister={this.updateRegister} />} />
                    <Route path='/StudentProfile' render={props => <StudentProfile {...props} student={this.state.student} />} />
                    <Route path='/StudentList' render={props => <StudentDropdown {...props} students={this.state.students} /> } />
                    <Route path='/NewStudent' render={props => <NewStudent {...props} addNewStudent={this.addNewStudent} /> } />

                </Switch>
            </div>
        )
    }
}

export default App;
