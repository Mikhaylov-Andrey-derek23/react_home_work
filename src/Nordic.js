import React from 'react';
import ReactDOM from 'react-dom';
import Price from './Price';
import Time from './time';
import Cours from './cours';
import Cours1 from './Cours1';
import Counter from './Counter';

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
export default Nordic;