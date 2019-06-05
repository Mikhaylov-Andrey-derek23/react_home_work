import React from 'react';

class Price extends React.Component{
    render(){
        return(
            <button>{this.props.price}</button>
        )
    }
}

export default Price;