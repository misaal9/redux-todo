import React, { Component } from 'react';

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToDoText: ''
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addToDo(this.state.addToDoText);
    this.setState({
      addToDoText: ''
    });
  }

  onInputChangeHandler(event) {
    this.setState({
      addToDoText: event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          onChange={this.onInputChangeHandler}
          value={this.state.addToDoText}
          />
      </form>
    );
  };
}

export default AddToDo;
