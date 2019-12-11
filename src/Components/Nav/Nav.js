import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Nav extends Component {
   
    render(){
        console.log()
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
                {/* <p>{username}</p> */}
            </div>
          )
    }  
};

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps)(Nav);