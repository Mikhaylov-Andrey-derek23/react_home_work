import React from 'react';
class Team extends React.Component{
    render(){

        return(
            <div>
                <ul>
                    {
                        this.props.name.map((val, key)=><li>{val}</li> )
                    }
                </ul>
            </div>
        )
    }
}
export default Team;