import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Nodes from './pages/Nodes';
import Resources from './pages/Resources';
import Instructions from './pages/Instructions';
import * as serviceWorker from './serviceWorker';
import './pages/style.css';

ReactDOM.render((
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/basics-of-genomics" component={Nodes}/>
            <Route path="/resources" component={Resources} />
            <Route path="/module-instructions" component={Instructions} /> 
        </Switch> 
    </BrowserRouter>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
