import React from 'react'
import ReactDOM from 'react-dom'
import AppRouters from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'



const app = document.getElementById('app');
ReactDOM.render(<AppRouters /> , app);