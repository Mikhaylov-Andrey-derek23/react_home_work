import React from 'react';
import ReactDOM from 'react-dom';

class Team extends React.Component{
    render(){

        return(
            <div>
                <ul>
                    {
                        this.props.name.map((val, key)=><li>{val.team} {val.counter}</li> )
                    }
                </ul>
            </div>
        )
    }
}
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
        const team = this.state.team
        const counter = this.state.counter;
        const teamlist = this.state.teamlist
        const teamStr = team+"";
        let key = 0;
        teamlist.forEach((val)=>{
            if(val.team == teamStr.toLowerCase()){
                key = 1
            }
        })
        if (team.length > 0 && key == 0){
            teamlist.push({
                team: team,
                counter: counter 
            })
            this.setState({
                teamlist : teamlist
            })
            console.log(this.state)
        }else{
            console.log("Уже есть")
        }
       
    }
    render(){
        return(
            <div>
            <form onSubmit={(event) => this.handlerSubmit(event)}>
                <p>Команда</p>
                <input onChange={(event) => this.handlerChange(event)} type="text" name="team" value={this.state.team}/>
                <p>Вели следующую команду: {this.state.team}</p>
                <p> Страна</p>
                <input onChange={(event) => this.handlerChange(event)} type="text" name="counter" value={this.state.counter}/>
                <p>Вели следующую страну: {this.state.counter}</p>
                <button type="submit">Click</button>
            </form>
            <Team name={this.state.teamlist}/>
            </div>
        )
    }
}

ReactDOM.render(<MyForm/>, document.getElementById('myForm'));