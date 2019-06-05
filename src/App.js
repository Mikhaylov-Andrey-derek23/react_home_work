import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Catolog from './Catolog';
import Main from './Main';
import About from './About';
import Header from './Header';
import CoursPage from './CoursPage';

class App extends React.Component{
    render(){
        return(
         <BrowserRouter>
            <Header/>
            <Route exact path='/catolog' component ={Catolog}/>
            <Route exact path='/' component ={Main}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/course/:id" component={CoursPage}/>
         </BrowserRouter>
        )
    }
}

export default App