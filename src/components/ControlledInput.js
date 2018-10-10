import React, {Component} from 'react';

export default class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName}/>
        <input onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName}/>
      </form>
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value }, () => console.log(this.state))
  }

} // end of Component
