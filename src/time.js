import React from 'react';
class Time extends React.Component{
    
    render(){
            return (
                <div>
                    <p>{this.props.day}</p>
                    <p>{this.props.house}</p>
                
                </div>
            )
        
    }
}

export default Time;