import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../utils/userService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    }, function() {delete this.state.message});
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault();
    userService.login(this.state)
      .then(() => {
        this.props.handleLogin();
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({message: "Invalid Credentials"});
      })
  }

  render() {
    return (
      <div>
        <header style={{fontSize: 40}}>Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-info btn-block">Log In</button>
              <div style={{color: "pink"}}>{this.state.message}</div>
              <br/>
              <Link to='/signup'><button className="btn btn-info btn-block">First Time Here? Sign Up!</button></Link>
              <Link to='/' style={{fontSize: 30}}>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;
