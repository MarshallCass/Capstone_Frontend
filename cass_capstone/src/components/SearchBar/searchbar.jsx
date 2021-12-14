import React from 'react';
import './searchbar.css';
import { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchWord: '',
            
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterproducts(this.state.searchWord)
    }

    render(){

    return (

<div className= "search-bar">    
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="searchWord" placeholder="Search" id="typeSearchBarX" className="form-control form-control-sm"  onChange={this.handleChange} value={this.state.searchWord}/>
                        <div>
                        <button-nav className="btn btn-outline-light btn-lg" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button-nav>
                        </div>
                    </form>
</div>    

        )
    }
}

export default SearchBar