import React from 'react'
import {Link} from 'react-router-dom'

const Landing = (props) => {

    return(
        <div style={{margin: "0 30% 0 30%", minWidth: 240}}>
            Welcome to React Chess
            <br/>
            <Link to='/localgame'>
            <button className='btn btn-info btn-block'>New Local Game</button>
            </Link>
            <br/>
            <Link to='/lobby'>
            <button className='btn btn-info btn-block'>New Online Versus Game</button>
            </Link>
            <br/>
            {props.user ? <Link to="/login">
            <button className='btn btn-info btn-block'>Sign In or Sign Up</button>
            </Link>
            :
            <Link to="" onClick={props.handleLogout}>
            <button className='btn btn-info btn-block'>Sign Out</button>
            </Link> }
        </div>
    )
}

export default Landing