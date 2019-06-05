import React from 'react';
import Team from  './Team';

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            team : '',
            counter : '',
            teamlist : []

        }
    }
    handlerChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handlerSubmit(event){
        event.preventDefault();
        const a1 = this.state.team
        const a2 = this.state.teamlist
        const a4 = a1+"";
        let a3 = 0;
        a2.forEach((val)=>{
            if(val == a4.toLowerCase()){
                a3 = 1
            }
        })
        if (a1.length > 0 && a3 == 0){
            a2.push(a1)
            this.setState({
                teamlist : a2
            })
            console.log(this.state)
        }else{
            console.log(556)
        }
       
    }
    render(){
        return(
            <div>
            <form onSubmit={(event) => this.handlerSubmit(event)}>
                <input onChange={(event) => this.handlerChange(event)} type="text" name="team" value={this.state.team}/>
                <p>{this.state.team}</p>
                <input onChange={(event) => this.handlerChange(event)} type="text" name="counter" value={this.state.counter}/>
                <p>{this.state.counter}</p>
                <button type="submit">Click</button>
            </form>
            <Team name={this.state.teamlist}/>
            </div>
        )
    }
}

export default MyForm;