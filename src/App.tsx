import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import GlobalStyle from './styles/GlobalStyles';

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
          </Switch>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
