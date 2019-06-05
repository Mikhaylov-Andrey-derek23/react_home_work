import React from 'react';
import Price from './Price';
import Time from './time';
import Cours from './cours';
class Cours1 extends React.Component{
    render(){
        console.log(this.props.data)
        return(
            <div>
                <div>
                {
                           this.props.data.map((item, key)=>
                         <Cours link={item.id} courseName={item.name} coursePrice={item.price} img={item.img} day={item.time.day} house={item.time.hours}/>
                          
                        )
                    }
            </div>
    
            <div>
                {
                    this.props.data.map((item, key)=>
                        <Time day={item.time.day} house={item.time.hours}/>
                    )
                }
            </div>
            </div>

            
        )
    }
}
export default Cours1