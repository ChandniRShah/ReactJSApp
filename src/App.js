import React, { Component } from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom';


import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Nav from './components/NavComponent/nav';
import homePage from './components/pages/homePage';
import India from './components/pages/India';
import NewYork from './components/pages/NewYork';
import France from './components/pages/France';


import './default.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

          <Header />
          <Nav />

            <Route exact path='/' component={India}/>
            <Route exact path='/NewYork' component={NewYork}/>
            <Route exact path='/France' component={France}/>
            {/*}<Route exact path='/homePage' component={homePage}/>*/}
          <homePage />

          <Footer />

      </div>
     </Router>
    );
  }
}

export default App;
