import React from 'react';
import Nav from './component/Nav/Nav'
import Main from './component/Main'
import Account from './component/Account/Account'
import Cart from './component/Cart/Cart'
import WishList from './component/WishList/WishList'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
     <Router>
        <Nav />
        <Switch>
         <Route path='/' exact component={Main} />
         <Route path='/account' component={Account} />
         <Route path='/cart' component={Cart} />
         <Route path='/wishlist' component={WishList} />
         </Switch>
     </Router>
  );
}

export default App;
