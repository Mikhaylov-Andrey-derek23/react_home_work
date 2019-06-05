import React from 'react';
import Price from './Price';
import Time from './time';
import {Link} from 'react-router-dom';

class Cours extends React.Component{
    render(){
        return(
            <Link  to={`/course/${this.props.link}`} className='course-item'>
            <h2>{this.props.courseName}</h2>
            <p><Price price={this.props.coursePrice}/></p>
            <img src={this.props.img}/>
            <div>Нужен {this.props.cursplus}</div>
            <div>
                <div>
                {
                    this.props.day != undefined && <Time day={this.props.day} house={this.props.house}/>
                }
                </div>
                

            </div>
            
            
            </Link>
            
        )
        
    }
}
export default Cours;