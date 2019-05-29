# react_home_work

import React from 'react';
import ReactDOM from 'react-dom';

class Price extends React.Component{
    render(){
        return(
            <button>{this.props.price}</button>
        )
    }
}

class Cours extends React.Component{
    render(){
        return(
            <a  href={this.props.link} className='course-item'>
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
            
            
            </a>
            
        )
        
    }
}
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
class Counter extends React.Component{
    
    render(){
        return (
            <div></div>
        )
    }
}

class Nordic extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            num : 0, 
            // cours : [
            //     {
            //         name : 'React',
            //         price : 19000,
            //         activ: true
            //     },
            //     {
            //         name: 'Java',
            //         price: 17900, 
            //         activ: false 
            //     },
            //     {
            //         name: 'Python',
            //         price: 30000,
            //         activ: true 

            //     }
            // ]
            cours : [],
            isload: false 
        }
    }
    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         cours:[
        //             {
        //                         name : 'React',
        //                         price : 19000,
        //                         activ: true
        //                     },
        //                     {
        //                         name: 'Java',
        //                         price: 17900, 
        //                         activ: false 
        //                     },
        //                     {
        //                         name: 'Python',
        //                         price: 30000,
        //                         activ: true 
            
        //                     }
        //         ], isload:true
        //     })
        // }, 2000)

        const xhr = new XMLHttpRequest();
        xhr.open('GET',' /date.json');
        xhr.send();
        
        xhr.addEventListener('load', ()=>{
            const respon = JSON.parse(xhr.responseText);
            console.log('parse')
            this.setState({
                cours : respon.data,
                isload : true
            })
           

        } )
        
        
    }
    renderCours2(){
        this.state.cours.forEach((elem)=>{
            return(
                console.log(elem.name, elem.price)
            )
        })
    }

    renderCours(name, price){
        return (
            <Cours courseName={name} coursePrice={price}/>

        )
    }

    salesPrice(){
        let price = this.state.cours;
        price.forEach((val)=>{

            val.price = val.price - val.price*0.1;
        })
        this.setState({cours : price})
    }
    
    Invers(){
        let price = this.state.cours;
        price.forEach((val)=>{

            if (val.activ == true) {
                val.activ = false
            }else{
                val.activ = true;
            }
            
        })
        this.setState({cours : price})
    }


    countChange(){
    
            this.setState({num: this.state.num + 1});
            let arCourse = this.state.cours;
            arCourse.push({
                name: "C++",
                price: 50000,
                activ: false
            })
            this.setState({cours : arCourse})
            console.log(arCourse)
            //this.state.cours.push({name: "C++", price : 50000})
    
    }

    countChange2(){
    
        this.setState({num: this.state.num -1});

    }
    handlerClick(){
        console.log('click');
    }
    color(){
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = 'red';
        }, 300)
        
    }
    render(){

        const a1 = this.state.cours;
        a1.forEach((val)=>{
            if (val.reuired != null){
                val.nameCours = [];
                this.state.cours.forEach((val2)=>{
                    if(val.reuired == val2.id){
                        val.nameCours.push(val)
                    }
                })
            }
        })
        

        return (
            <div className='wrapper'>
                <div className='nordic'><h1>{
                    !this.state.isload ? 'Загрузка' : 'Загрузка завершина'
                }</h1></div>
                <button onClick={()=>{this.handlerClick()}}>Click me!</button>
                <button onClick={()=>{this.color()}}>Click color</button>
                <div className='course.box'>{this.renderCours('React', ' 200 руб.')}
                <Cours courseName={'Веб разработка'} coursePrice={'100 руб.'}/>
                </div>
                <Counter num={this.state.num}/>
               <button onClick = {()=>this.countChange()}>+ Click</button>
               <button onClick = {()=>this.countChange2()}>- Click</button>
               <button onClick = {()=>this.salesPrice()}>- Price -</button>
               <button onClick = {()=>this.Invers()}>- Покажем что скрыто -</button>
               <div>{this.renderCours2()}</div>
               {/* <div>
                    {
                        this.state.cours.map((item, key)=>
                           item.activ ? <Cours link={item.id} courseName={item.name} coursePrice={item.price} img={item.img} 

                           /> : ''
                        )
                    }
               </div> */}
               <Cours1 data={this.state.cours}/>

            </div>
        )
    }
}
class Credit extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.creditImg}</div>
                <div>{this.props.creditNumber}</div>
                <div>{this.props.creditData}</div>
                <Balanas balans={this.props.creditB}/>
            </div>
        )
    }
}
class Balanas extends React.Component{
    render(){
        return(
            <div>{this.props.balans}</div>
        )
    }
}
class Depozit extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.depozitImg}</div>
                <div>{this.props.depozitNumber}</div>
                <div>{this.props.depozitData}</div>
                <Balanas balans={this.props.depozitB}/>
            </div>
        )
    }
}

class BankCard extends React.Component{


    render(){
        return(
            <div className="Wrapper">
            <Nordic/>
            {/* <Credit creditImg={'Credit'} creditNumber={'1234'} creditData={'21.21'} creditB={-222}/>
            <Depozit depozitImg={'Depozit'} depozitNumber={'4321'} depozitData={'21.21'} depozitB={5646}/>   */}
            </div>
        )
    }
}
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

//ReactDOM.render(<Nordic/>, document.getElementById('root'));
ReactDOM.render(<MyForm/>, document.getElementById('myForm'));
