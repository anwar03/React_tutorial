import React from 'react'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Header from '../components/HeaderComponent'
import DashboardComponent from '../components/DashboardComponent'
import AddExpenseComponent from '../components/AddExpenseComponent'
import EditComponent from '../components/EditComponent'
import HelpComponent from '../components/HelpComponent'
import NotFoundPage from '../components/NotFoundPage'


const AppRouters = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ DashboardComponent } exact={ true } />
                <Route path='/create' component={ AddExpenseComponent }/>    
                <Route path='/edit/:id' component={ EditComponent } />    
                <Route path='/help' component={ HelpComponent } />
                <Route component={ NotFoundPage }  />  
            </Switch>
        </div>
    </Router>
);


export default AppRouters;