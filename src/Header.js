import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component{

    
    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/catolog">Catolog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/course">Course</Link></li>
                               
                </ul>
            </nav>
        )
    }
}

export default Header;