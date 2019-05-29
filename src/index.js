import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'



class Navigation extends React.Component{
    render(){
        return(
            <div className="Navigation">
                <div className="nav">
                    <div className="logo">sh</div>
                    <a href="#">Женщинам</a>
                    <a href="#">Мужчинам</a> 
                    <a href="#">Детям</a> 
                    <a href="#">Новинки</a>  
                    <a href="#">О нас</a>
                </div> 
                <Basket name="Слава" count="5"/>
            </div>
        )
    }
}  

class Basket extends React.Component{
    render(){
        return(
            <div className="basket_component">
                <div className="user">Привет, {this.props.name} (<a href="#">Выйти</a>)</div>
                <a className="basket" href="#">Корзина ({this.props.count})</a>
            </div>
        )
    }
}

class Selector extends React.Component{

  

    render(){
        return(
            <div className="Selector">
                <form>
                    <select name="Categories">
                        <option value="basic">Категории</option>
                        <option value="Jacket">Куртки</option>
                        <option value="Sneake">Кеды</option>
                        <option value="Jeans">Джинсы</option>
                    </select>
                    <select name="Size">
                        <option value="basic">Размер</option>
                        <option value="big">Больщой</option>
                        <option valur="medium">Средий</option>
                        <option value="small">Малый</option>
                    </select>
                    <select name="Price" >
                        <option value="basic">Стоимость</option>
                        <option value="0-1000">0-1000 руб.</option>
                        <option value="1000-3000">1000-3000 руб.</option>
                        <option value="3000-6000">3000-6000 руб.</option>
                        <option value="6000-9000">6000-9000 руб.</option>
                    </select>
                </form>
                
            </div>
        )
    }
}
class CardGood extends React.Component{
    render(){
        return(
            <div className="cardGood">
                        <img src={this.props.img} width="260" height="260" alt={this.props.name}></img>
                        <a href={this.props.nameId}>{this.props.name}</a>
                        <p>{this.props.price} руб.</p>
            </div>
        )
    }
}
class CardsGood extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isload: false,
            data: [] 
        }
    }

    componentDidMount(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/data.json');
        xhr.send();
        xhr.addEventListener('load', ()=>{
            console.log('load');
            const respon = JSON.parse(xhr.responseText);
            this.setState({
                data : respon.data

            })
            console.log(this.state)
        })
    }

    render(){
        return(
            <div className="cardsGood">
                {
                    this.state.data.map((item, key) =>
                   <CardGood img={item.url_img} name={item.name} price={item.price} nameId={item.idName}/>
                 )
                }
            </div>
        )
    }
}


class Goods_card extends React.Component{
    render(){
        return(
            <div className="goodsCard">
                <div className="tag">
                    <a href="#">Главная </a><span>/</span><a href="#">{this.props.tagName}</a>
                </div>
                <h1>{this.props.tagName}</h1>
                <p>Все товары</p>
                <Selector/>
                <CardsGood/>
            </div>
        )
    }
}

class Paginator extends React.Component{
    render(){
        return(
            <div className="paginator">
                <a href="1" className="activ">1</a>
                <a href="2" className="next">2</a>
                <a href="2" className="next">3</a>
                <a href="2" className="next">4</a>
            </div>
        )
    }
}

class Wrapper extends React.Component{


    render(){
        return(
            <div className="wrapper">
            <Navigation/>
            <Goods_card tagName="Мужчинам"/>
            <Paginator/>
            </div>
        )
    }
}



ReactDOM.render(<Wrapper/>, document.getElementById('root'));
