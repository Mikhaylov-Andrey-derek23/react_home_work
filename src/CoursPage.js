import React from 'react';


class CoursPage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            course :null
        }
    }

    componentDidMount(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET',' /date.json');
        xhr.send();
        
        xhr.addEventListener('load', ()=>{
            const respon = JSON.parse(xhr.responseText);
            console.log(respon)
            respon.data.forEach(el => {
                if(el.id == this.props.match.params.id){
                    this.setState({
                        course : el
                    })
                }
            });
            
           

        } )
    }

    render(){
        console.log(this.state.course)
        if(this.state.course == null){
            return(
                <h1>Загрузка</h1>
            )
        }else{
            return(
                <div>
                    <h1>Cours {this.props.match.params.id}</h1>
                    {/* <Cours link="1" courseName="1" coursePrice="1" img="1" cursplus="65" day="1" house="2"/> */}

                    <div>
                        <h1>{this.state.course.name}</h1>
                        <img src={this.state.course.img}></img>
                        <p>Цена {this.state.course.price}</p>
                    </div>
                  
                </div>
            )
        }
        
    }
}

export default CoursPage;