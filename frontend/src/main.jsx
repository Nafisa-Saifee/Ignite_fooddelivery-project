import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import StoreContestProvider, { StoreContest } from './components/Contest/StoreContest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContestProvider>
  <App />
  </StoreContestProvider>
  </BrowserRouter>
   
  
)
