import Navbar from './components/javascript/Navbar.js'
import Header from './components/javascript/Header.js'
import About from './components/javascript/About.js'
import Form from './components/javascript/Sendmail.js'
import Reservieren from './components/javascript/reservieren.js'
import Galerie from './components/javascript/Galerie.jsx'
import SideButtons from './components/javascript/sidebuttons.js'
import Footer from './components/javascript/footer.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <SideButtons />
          <div className="content">
            <Switch>
              <Route path="/">
                <Header />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/galerie">
                <Galerie />
              </Route>
              <Route path="/contact">
                <Form />
              </Route>
              <Route path="/reservieren">
                <Reservieren />
              </Route>
            </Switch>
            
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
