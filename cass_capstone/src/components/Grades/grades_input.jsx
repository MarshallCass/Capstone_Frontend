import React, { Component } from 'react';
import './grades.css';

class GradesInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
          student: "",
          grade: "",
          assignment: "",
          comments: "",

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const grades_input = {
            student: this.state.student,
            grade: this.state.grade,
            assignement: this.state.assignemnt,
            comments: this.state.comments
        };
        this.props.grades_input(login);
        this.setState({
            student: "",
            grade: "",
            assignment: "",
            comments: "",
        });
        
    }


  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }

    render (){
    return (
       
<div className="container">
   <form className="add_grade">
            <div className="col">
            <div>
        <button onClick={this.showMenu}>
          Student
        </button>
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
        <button onClick={this.showMenu}>
          Assignment
        </button>
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
        <button onClick={this.showMenu}>
          Grade
        </button>
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
        <div className="form-outline form-white mb-4">
                    <input type="text" name="username" id="typeUsernameX" className="form-control form-control-lg"/>
                    <label className="form-label fs-5 fw-bold" value="Username" placeholder="Comments"/>
                  </div>
      </div>
                <div className="card-footer">
                    <button className="btn btn-outline-light btn-lg" type="submit"> Submit </button>
                </div>
            </div>  
  
  </form>
</div>

    )
}
}

export default GradesInput;