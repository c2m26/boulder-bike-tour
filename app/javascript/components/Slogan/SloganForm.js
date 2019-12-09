import React, {Component} from 'react'

class SloganForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        proposal: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
 
  }

  handleInputSubmit(event) {
    alert('The submitted Slogan was: ' + this.state.proposal);
    event.preventDefault();

    const firstName = this.state.firstName
    const lastName = this.state.lastName
    const email = this.state.email
    const proposal = this.state.proposal
    
    const url = 'http://localhost:3000/api/v1/slogans';
    const data = { firstName: firstName, lastName: lastName, email: email, proposal: proposal }

    console.log(data)

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    } 
    ).then(response =>{
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
     
  render () {
    return(
      <form onSubmit={this.handleInputSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input required type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} className="form-control" placeholder="John"/>
        </div>
        
        <div className="form-group">
          <label>Last Name</label>
          <input required type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} className="form-control" placeholder="Doe"/>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input required type="email" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Johdoe@mail.com"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Slogan</label>
          <input required type="text" maxLength="50" name="proposal" value={this.state.proposal} onChange={this.handleInputChange} className="form-control" placeholder="Give it a try!"/>
          <small id="sloganHelp" className="form-text text-muted">Slogan must have maximum 50 characters</small>
        </div>
        
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
}

export default SloganForm
