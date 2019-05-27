import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const items = [
    [
        'jacket_blue', 
        'https://littlegentrys.ru/image/cache/data/products/2016/03/kurtka_finn_flare_00004768_1-800x800.jpg',
        'Куртка синия',
        5400
    ],
    [
        'leather_jacket',
        'http://motolife78.ru/d/revit-erin-black.jpg',
        'Кожанная куртка',
        22500
    ],
    [
        'jacket_pockets',
        'https://im0-tub-ru.yandex.net/i?id=d92ca965dfbfe179ce0bfb7a8d3391dd&n=13',
        'Куртка  c карманами',
        9200
    ],
    [
        'casual_jacket',
        'http://k-culture.co.uk/images/com_hikashop/upload/mj004.jpg',
        'Куртка casual ',
        8800
    ],
    [
        'stylish leather jackett',
        'https://ae01.alicdn.com/kf/HTB1HItKXLfsK1RjSszbq6AqBXXaq/Men-s-Leather-Jacket-Motorcycle-Biker-PU-Faux-Leather-Coat-Slim-Fit-Winter-Thick-Warm-Parka.jpg',
        'Стильная кожаная куртка',
        128000
    ],
    [
        'sneakers_gray',
        'https://static.dochkisinochki.ru/upload/img_loader/40/28/84/GL000479531mGS6545_001.jpg',
        'Кеды серые',
        2900
    ],
    [
        'sneakers_casul',
        'https://i.allo.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/1/a11-1_29.jpg',
        'Кеды Casul',
        5900
    ]
    
];

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

class Goods_card extends React.Component{
    render(){
        return(
            <div className="goods_card">
                <div className="tag">
                    <a href="#">Главная </a><span>/</span><a href="#">{this.props.tagName}</a>
                </div>
                <h1>{this.props.tagName}</h1>
                <p>Все товары</p>
                <Selector/>
                <div className="cards_good">{items.map(item => <div className="card_good">
                        <img src={item[1]} width="260" height="260" alt={item[2]}></img>
                        <a href={item[0]}>{item[2]}</a>
                        <p>{item[3]} руб.</p>
                    </div>)}
                </div>
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
