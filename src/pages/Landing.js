import React from 'react'
import {Link} from 'react-router-dom'

const Landing = (props) => {
    let landing = props.user ?
    <div>
    <div style={{fontSize: 40}}>React Chess</div>
    <div>Welcome, {props.user.name}</div></div>:
    <div><div style={{fontSize: 40}}>React Chess</div>
    <div>Welcome, Guest</div></div>;
    let bottomButton = props.user ? 
    <Link to="" onClick={props.handleLogout}>
    <button className='btn btn-info btn-block'>Sign Out</button>
    </Link>:
    <Link to="/login">
    <button className='btn btn-info btn-block'>Sign In or Sign Up</button>
    </Link>;

    return(

        <div style={{margin: "0 30% 0 30%", minWidth: 240}}>
            {landing}
            <Link to='/localgame'>
            <button className='btn btn-info btn-block'>New Local Game</button>
            </Link>
            <br/>
            <Link to='/lobby'>
            <button className='btn btn-info btn-block'>New Online Versus Game</button>
            </Link>
            <br/>
            {bottomButton}
        </div>
    )
}

export default Landing