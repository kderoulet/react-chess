import React from 'react'
import {Link} from 'react-router-dom'

const Landing = (props) => {
    return(
        <div>
            <Link className='btn' to='/game'>
            Start a new game
            </Link>
        </div>
    )
}

export default Landing