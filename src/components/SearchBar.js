import React from 'react';
import './ImageList.css'
class SearchBar extends React.Component{

  state = {term:''}

  onFormSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }
  render(){
    return (
      <div className = "ui raised segment">
      <form  className = "ui form" onSubmit = {this.onFormSubmit}>
        <div className = "field">
          <label>Image Search</label>
            <input
            type = "text"
            onChange = {(e) => this.setState({term:e.target.value})}
            value = {this.state.term}/>
        </div>
      </form>
      </div>
    );
  }

}
export default SearchBar
