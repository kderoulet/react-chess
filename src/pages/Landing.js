import React from 'react'
import {Link} from 'react-router-dom'

const Landing = (props) => {
    return(
        <div>
            Welcome to React Chess
            <br/>
            <Link className='btn btn-sm' to='/localgame'>
            <button>New Local Game</button>
            </Link>
            <br/>
            <Link className='btn btn-sm' to='/lobby'>
            <button>New Online Versus Game</button>
            </Link>
            <br/>
            <Link className="button btn-sm" to="/signin">
            <button>Sign In With Google</button>
            </Link>
        </div>
    )
}

export default Landing