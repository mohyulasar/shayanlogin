import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      auth: false
    }
    
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = () =>{
    console.log('in authentication section')
    const un = ['mohy@gmail.com', 'sarmad@gmail.com']
    const pw = ['12345', '12121']
    const {email, password} = this.state;
    for(let i = 0; i<un.length; i++){
      if((email === un[i]) && (password === pw[i])){
        this.setState({
          auth: true
        })
        this.props.history.push("/dashboard");
        console.log('you have successfuly logged in')
        console.log(this.state)
      }
      else{
        console.log('password or username is incorrect')
      }
    }
    
  }
  render() {

    return (
      <div>
        <Form inline style = {{textAlign: 'center', paddingTop: '100px'}}>
          <Label>Please Login</Label>
          <br/>
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange = {this.handleChange} />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange = {this.handleChange} />
          </FormGroup>
          {' '}
          <Button onClick = {this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}
