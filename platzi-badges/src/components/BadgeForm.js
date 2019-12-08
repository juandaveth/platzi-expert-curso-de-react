import React, {Component} from 'react';

class BadgeForm extends Component {
  state={}

  handleChange = e => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // })

    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = e => {
    console.log('Button was clicked')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('Forma was submitted')
  }


  render() {
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              className="form-control"
              onChange={this.handleChange} 
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              className="form-control"
              onChange={this.handleChange} 
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              className="form-control"
              onChange={this.handleChange} 
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>
            
          <div className="form-group">
            <label>Job Title</label>
            <input 
              className="form-control"
              onChange={this.handleChange} 
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter handle</label>
            <input 
              className="form-control"
              onChange={this.handleChange} 
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>

          <div className="form-group">
            <button 
              type="submit"
              onClick={this.handleClick} 
              className="btn btn-primary">
                Save
            </button>
          </div>
        </form>
      </div>
    )
  } 
}

export default BadgeForm