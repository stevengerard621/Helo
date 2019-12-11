import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Nav extends Component {

    render(){
        return(
            <div>
                <Link to='/dashboard'>
                    <button>HOME</button>
                </Link>
                <Link to='/post/:postid'>
                    <button>NEW POST</button>
                </Link>
                <Link to='/'>
                    <button>LOGOUT</button>
                </Link>
            </div>
          )
    }  
};
export default Nav;