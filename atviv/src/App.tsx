import { BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from "./router/Router";

import './global.css';
import Header from './components/header/header';

export default function App() {
  

  return (
    <>
    <Router>
      <Header />
      <AppRoutes />
    </Router>      
    </>
  )
}

