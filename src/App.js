import React from 'react';
import GlobalStyles from './globalStyles'
import Home from './components/pages/HomePage/Home'
import Products from './components/pages/Products/Products'
import Services from './components/pages/Services/Services'
import SignUp from './components/pages/SignUp/SignUp'
import {Navbar,Footer} from './components'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/services' exact component={Services} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
