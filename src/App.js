import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/404/NotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Markets from './Components/Markets/markets';
import Projects from './Components/Projects/Projects';
import News from './Components/News/news';
import Footer from './Components/footer/footer';
import Contact from './Components/ContactUs/contact';
import NewsDetail from './Components/News-Detail/index';
import Faq from './Components/Faq/Faq';
import Metals from './Components/Metals-Minerals/Metals';
import Header from './Components/Header2/index';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        {/*<Header/>*/}
        <Switch>
              <Route exact path="/" >
                <Home/>
              </Route>
              <Route path="/about">
                <About />
              </Route>

              <Route path="/markets">
                <Markets />
              </Route>

              <Route path="/metals-minerals">
                    <Metals/>
              </Route>

              <Route path="/projects">
                <Projects />
              </Route>

              <Route path="/news">
                <News />
              </Route>

              <Route path="/news-detail">
                <NewsDetail/>
              </Route>

              <Route path="/contact-us">
                <Contact/>
              </Route>

              <Route path="/faq">
                <Faq/>
              </Route>
                
              <Route path="*">
                <NotFound/>
              </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
