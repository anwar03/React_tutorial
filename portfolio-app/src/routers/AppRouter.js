import React from 'react'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Header from '../components/HeaderComponent'
import HomeComponent from '../components/HomeComponent'
import PortfolioItemComponent from '../components/PortfolioItemComponent'
import ContactComponent from '../components/ContactComponent'
import NotFoundPage from '../components/NotFoundPage'
import PortfolioComponent from '../components/PortfolioComponent';


const AppRouters = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ HomeComponent } exact={ true } />
                <Route path='/portfolio' component={ PortfolioComponent } exact={ true } />
                <Route path='/portfolio/:id' component={ PortfolioItemComponent } />    
                <Route path='/contact' component={ ContactComponent } />
                <Route component={ NotFoundPage }  />  
            </Switch>
        </div>
    </Router>
);


export default AppRouters;