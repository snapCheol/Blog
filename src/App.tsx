import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './Pages/About';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Works from './Pages/Works';
import GlobalStyle from './styles/GlobalStyles';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/works" component={Works} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
