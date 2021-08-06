import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import Home from './components/pages/Home';
import Carousel from './components/pages/Carousel';
import Gallery from './components/pages/Gallery';

import { BrowserRouter,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/gallery" component={Gallery} />
        <Route path="/carousel" component={Carousel} />
        <Route path="/" component={Home} />
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
